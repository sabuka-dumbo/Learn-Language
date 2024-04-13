from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login
from .models import *

# Create your views here.
def index(request):
    return render(request, "index.html")

def login(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('index'))
        else:
            return HttpResponseRedirect(reverse('login') + '?error=Invalid email or password')
    else:
        return render(request, "login.html")

def register(request):
    return render(request, "register.html")

def learn(request):
    return render(request, "register.html")

def goals(request):
    return render(request, "register.html")