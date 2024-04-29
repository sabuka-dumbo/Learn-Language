from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json
import random


# Create your views here.
def index(request):
    if request.user.is_authenticated:
        strikes = 0
        grades = 0

        if Strike.objects.all().filter(user=request.user).exists():
            strikes = Strike.objects.all().get(user=request.user).day_strike
            grades = Grades.objects.all().get(user=request.user)
        
        num_for_quote = random.randint(1, 10)
        quote = Tips.objects.all().get(pk=num_for_quote).tip

        return render(request, "index.html", {
            "days_of_strike": strikes,
            "grades": grades,
            "quote": quote,
        })
    else:
        return HttpResponseRedirect(reverse('login'))

def login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, username=email, password=password)

        if user is not None:
            auth_login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "login.html")

def register(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        new_user = User(username=email, email=email, password=password)
        new_user.save()

        if new_user is not None:
            auth_login(request, new_user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return HttpResponseRedirect(reverse("register"))
    else:
        return render(request, "register.html")

def learn(request):
    return render(request, "learn.html")

def goals(request):
    return render(request, "register.html")

def profile(request):
    return render(request, "register.html")

def listening_test(request):
    return render(request, "test.html")

def words(request):
    return render(request, "test.html")

@csrf_exempt
def add_word(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            word = data_from_js.get('word')
            is_word = data_from_js.get('is_word')

            if is_word == True:
                new_data = Word.objects.create(user=request.user, word=word)
            else:
                new_data = Phrase.objects.create(user=request.user, phrase=word)

            new_data.save()

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({})

@csrf_exempt
def get_word(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            max_word_queryset = Word.objects.filter(user=request.user, learned=True)
            max_word_count = max_word_queryset.count()
            random_word = ''

            if max_word_count > 0:
                random_word_id = random.randint(0, max_word_count - 1)
                random_word = max_word_queryset[random_word_id].word

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({"word": random_word})