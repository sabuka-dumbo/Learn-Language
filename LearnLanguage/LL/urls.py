from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('register/', views.register, name="register"),
    path('learn/', views.learn, name="learn"),
    path('vocabulary/', views.goals, name="vocabulary"),
    path('profile/', views.profile, name="profile"),
    path('listening_test/', views.listening_test, name="listening_test"),
    path('words/', views.words, name="words"),

    ## APIs for js
    path('add_word/', views.add_word, name="add_word"),
]