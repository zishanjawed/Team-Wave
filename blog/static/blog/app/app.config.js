'use strict';

angular.module('blog').
config(function($routeProvider,$locationProvider)
{




	$routeProvider

	.when('/home',
	{
        template:'<post-list></post-list>'

	})
	.otherwise(
	{
		redirectTo:'/home'


	})

	






});