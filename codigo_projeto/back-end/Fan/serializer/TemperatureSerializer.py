from rest_framework import serializers
from Fan.models.TemperatureModel import TemparatureEntity
from Fan.models.FanModel import FanEntity

class TemperatureEntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = TemparatureEntity
        fields = '__all__'

    def create(self, validated_data):
        temperature_entity = TemparatureEntity.objects.create(**validated_data)
        temperature = validated_data['temperature']

        if temperature >= 28.00:
            fan = FanEntity.objects.create(turnOn=True, fan_temperature=temperature_entity)
            # Cria uma instância de FanEntity e associa à instância de TemperatureEntity
        else:
            fan = FanEntity.objects.create(turnOn=False, fan_temperature=temperature_entity)

        return temperature_entity