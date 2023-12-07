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
            fan = FanEntity(turnOn=True)  # Cria uma instância de FanEntity
            fan.save()  # Salva a instância de FanEntity no banco de dados

        return temperature_entity