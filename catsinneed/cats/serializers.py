from rest_framework import serializers
from cats.models import Cat 

# Cat Serializer
class CatSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cat 
    fields = '__all__'