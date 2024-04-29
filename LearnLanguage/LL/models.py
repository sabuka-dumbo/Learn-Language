from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    level = models.CharField(max_length=100, default="A1")

class Strike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="strike_user")
    day_strike = models.IntegerField()
    count_strikes = models.IntegerField()

    def __str__(self):
        return f"{self.user}'s strike: {self.day_strike} day"
    
class Grades(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="grade_user")
    points = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.user} got {self.points} point on {self.date}"
    
class Tips(models.Model):
    tip = models.CharField(max_length=1500)
    
    def __str__(self):
        return f"Tip {self.pk}"
    
class Word(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="word_for_user")
    word = models.CharField(max_length=100)
    learned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user} added {self.word} to their vocabulary"
    
class Phrase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="phrase_for_user")
    phrase = models.CharField(max_length=1000)
    learned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user} added {self.phrase} to their vocabulary"