'use strict';

angular.module('confirmClick').


  directive('confirmClick',function(){


  	return {
  		template:'are u sure',


  		link:function(scope,element,attr){

  			var msg=attr.confirmClick || 'ARE U SURE';
  			var clickAction=attr.confirmedClick;
  			element.bind('click',function(event){

                   if (window.confirm(msg)){
                   	scope.$eval(clickAction)
                   }

  			})


  		}



  	}




  })