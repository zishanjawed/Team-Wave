from rest_framework import serializers
from .models import QuestionModel

class QuestionSerializer(serializers.ModelSerializer):
	class Meta:
          model=QuestionModel
          fields=('__all__')

        