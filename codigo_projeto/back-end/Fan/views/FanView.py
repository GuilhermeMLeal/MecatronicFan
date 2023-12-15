from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from Fan.models.FanModel import FanEntity
from Fan.serializer.FanSerializer import FanEntitySerializer

class FanEntityView(viewsets.ViewSet):
    serializer_class = FanEntitySerializer

    def list(self, request):
        queryset = FanEntity.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
