from django.db import models
from Fan.models.TemperatureModel import TemparatureEntity
# Create your models here.

class FanEntity(models.Model):
    turnOn = models.BooleanField(default=False)
    fan_temperature = models.ForeignKey(TemparatureEntity, on_delete=models.CASCADE)

    def __str__(self):
        return f"Fan is {'ON' if self.turnOn else 'OFF'}"
   