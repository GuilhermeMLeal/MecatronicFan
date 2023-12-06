from django.db import models

# Create your models here.

class FanEntity(models.Model):
    turnOn = models.BooleanField(default=False);
   
    def __str__(self) -> str:
        return {self.turnOn};