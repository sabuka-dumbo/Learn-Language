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

def word_test(request):
    return render(request, "test.html")

def translate_test(request):
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


@csrf_exempt
def get_word2(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            max_word_queryset = Word.objects.filter(user=request.user)
            max_word_count = max_word_queryset.count()
            random_word = ''

            if max_word_count > 0:
                random_word_id = random.randint(0, max_word_count - 1)
                random_word = max_word_queryset[random_word_id].word

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({"word": random_word})

@csrf_exempt
def check_test3(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            word1 = data_from_js.get('word_field1').lower()
            word2 = data_from_js.get('word_field2').lower()
            word3 = data_from_js.get('word_field3').lower()
            word4 = data_from_js.get('word_field4').lower()
            word5 = data_from_js.get('word_field5').lower()
            main_word = data_from_js.get('main_word').lower()

            count_correct_symbols1 = sum(1 for x, y in zip(word1, main_word) if x == y)
            count_correct_symbols2 = sum(1 for x, y in zip(word2, main_word) if x == y)
            count_correct_symbols3 = sum(1 for x, y in zip(word3, main_word) if x == y)
            count_correct_symbols4 = sum(1 for x, y in zip(word4, main_word) if x == y)
            count_correct_symbols5 = sum(1 for x, y in zip(word5, main_word) if x == y)

            all_symbols = len(main_word) * 5
            count_correct_symbols = count_correct_symbols1 + count_correct_symbols2 + count_correct_symbols3 + count_correct_symbols4 + count_correct_symbols5

            right_perc = count_correct_symbols * 100 / all_symbols

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({"right_perc": right_perc})

@csrf_exempt
def save_points(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            points =  data_from_js.get("points")
            test_points = data_from_js.get("test_points")

            if Strike.objects.filter(user=request.user).exists():
                strike = Strike.objects.get(user=request.user)
                if strike.last_strike == timezone.now().date():
                    pass
                else:
                    if strike.day_strike == 10:
                        strike.count_strikes += 1
                        strike.day_strike = 1
                    else:
                        strike.day_strike += 1
                strike.last_strike = timezone.now().date()
                strike.save()
            else:
                strike = Strike.objects.create(user=request.user, day_strike=1, count_strikes=0, last_strike=timezone.now().date())

            new_grade = Grades.objects.create(user=request.user, total_points=test_points, points=points, date=timezone.now())
            new_grade.save()

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({  })

@csrf_exempt
def check_test1(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            word1 = data_from_js.get('word').lower()
            main_word = data_from_js.get('main_word').lower()

            count_correct_symbols = sum(1 for x, y in zip(word1, main_word) if x == y)

            right_perc = count_correct_symbols * 100 / len(main_word)

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({"right_perc": right_perc})

@csrf_exempt
def check_test2(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            translated_word = data_from_js.get('word').lower()
            main_word = data_from_js.get('main_word').lower()
            word_meaning = ""
            right_perc = 0

            if Word.objects.all().filter(word=main_word):
                word_meaning = Word.objects.all().get(word=main_word).meaning

                count_correct_symbols = sum(1 for x, y in zip(translated_word, word_meaning) if x == y)

                right_perc = count_correct_symbols * 100 / len(word_meaning)
                print(right_perc)
            else:
                return JsonResponse({"right_perc": right_perc, "error": True})

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        
    return JsonResponse({  })