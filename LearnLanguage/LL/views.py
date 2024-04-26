from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from .models import *
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
def info(request):
    if request.method == "POST":
        try:
            data_from_js = json.loads(request.body.decode('utf-8'))
            GID = data_from_js.get('GID')
            user = request.user
            user_info = Userinfo.objects.all().get(user=user)
            gradebook = Gradebook.objects.all().get(id=GID)
            student_info = Student.objects.all().get(user=user, gradebook=gradebook)

        except json.JSONDecodeError as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({
        "attended": student_info.attendance, 
        "missed": student_info.missed, 
        "one": student_info.one,
        "two": student_info.two,
        "three": student_info.three,
        "four": student_info.four,
        "five": student_info.five,
        "six": student_info.six,
        "seven": student_info.seven,
        "eight": student_info.eight,
        "nine": student_info.nine,
        "ten": student_info.ten,
        })