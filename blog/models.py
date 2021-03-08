from django.db import models
from django.conf import settings
# Create your models here.
class QuestionModel(models.Model):
	title=models.CharField(max_length=300)
	link=models.CharField(max_length=200)
	Query=models.CharField(max_length=200)
	tags=models.CharField(max_length=200)




	
