from cats.models import Cat
from rest_framework import viewsets, permissions
from .serializers import CatSerializer

# CustomViewSet (getAll)
class CustomViewSet(viewsets.ModelViewSet):
    serializer_class = CatSerializer

    def get_queryset(self):
        return Cat.objects.all()

#CatsViewSet
class CatViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CatSerializer

    def get_queryset(self):
        return self.request.user.cats.all()

    def perform_create(self, serializer):
        serializer.save(rescuer=self.request.user)


