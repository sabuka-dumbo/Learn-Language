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
            is_work = data_from_js.get('is_word')
            
            

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({})