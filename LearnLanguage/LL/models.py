from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

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