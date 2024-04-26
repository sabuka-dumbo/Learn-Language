from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('register/', views.register, name="register"),
    path('learn/', views.learn, name="learn"),
    path('goals/', views.goals, name="goals"),
    path('profile/', views.profile, name="profile"),
    path('listening_test/', views.listening_test, name="listening_test"),
    path('words/', views.words, name="words")
]