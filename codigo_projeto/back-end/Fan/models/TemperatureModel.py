from django.db import models

# Create your models here.

class TemparatureEntity(models.Model):
    temperature = models.DecimalField(max_digits=5, decimal_places=2) 
    register_temperature = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.temperature, self.register_temperature