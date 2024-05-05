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
    path('word_test/', views.word_test, name="word_test"),
    path('translate_test/', views.translate_test, name="translate_test"),
    path('words/', views.words, name="words"),

    ## APIs for js
    path('add_word/', views.add_word, name="add_word"),
    path('get_word/', views.get_word, name="get_word"),
    path('get_word2/', views.get_word2, name="get_word2"),
    path('check_test3/', views.check_test3, name="check_test3"),
    path('check_test2/', views.check_test2, name="check_test3"),
    path('check_test1/', views.check_test1, name="check_test1"),
    path('save_points/', views.save_points, name="save_points"),
]