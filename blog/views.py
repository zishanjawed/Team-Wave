from django.shortcuts import render
from.models import QuestionModel

from .serializers import QuestionSerializer
from rest_framework.decorators import api_view,throttle_classes
from rest_framework.throttling import UserRateThrottle,AnonRateThrottle
from rest_framework.response import Response

import urllib3

import json





# Create your views here.
def home(request):
	return render(request,'blog/home.html',{})

class UserMinThrottle(UserRateThrottle):

	 scope = 'user_min'


class UserDayThrottle(UserRateThrottle):
	 scope = 'user_day'


@api_view(['GET'])
@throttle_classes([UserDayThrottle,UserMinThrottle])

def quest_form_api(request,query):

		query='https://api.stackexchange.com/2.2/questions?'+query
		queryset=QuestionModel.objects.filter(Query=query)

		if queryset:

			serializer =QuestionSerializer(queryset, many=True)
			return Response(serializer.data)


		else:
			http=urllib3.PoolManager()
			r= http.request('GET',query)
			data=json.loads(r.data.decode('utf-8')) 
			if   data.get('error_id'):
				 return Response(data)
			
			for i in range(len(data['items'])):
					quest=QuestionModel()
					quest.tags=data['items'][i]['tags']
					quest.Query=query
					quest.link=data['items'][i]['link'];
					quest.title=data['items'][i]['title']
					quest.save()
					
			queryset=QuestionModel.objects.filter(Query=query)
			serializer =QuestionSerializer(queryset, many=True)
			return Response(serializer.data)




		
