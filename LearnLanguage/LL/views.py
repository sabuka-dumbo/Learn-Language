from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login
from . import models

# Create your views here.
def index(request):
    return render(request, "index.html")

def login(request):
    if request.method == "POST":
        email = request.POST("email")
        password = request.POST.get("password")

        return HttpResponseRedirect(reverse('index'))
    else:
        return render(request, "login.html")

def register(request):
    return render(request, "register.html")

def learn(request):
    return render(request, "register.html")

def goals(request):
    return render(request, "register.html")