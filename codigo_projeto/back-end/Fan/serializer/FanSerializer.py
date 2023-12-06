from rest_framework import serializers
from Fan.models.FanModel import FanEntity

class FanEntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = FanEntity
        fields = '__all__'