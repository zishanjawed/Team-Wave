'use strict';

angular.module('posts').



        factory('Posts', function($http,$resource) {

  
  return {
    
    query: function(query,callback) {


    	query=query.split('?')[1]

    	var url='/api/'+ query


    	var a=$http.get(url).then(successcallback,errorcallback)

    	function successcallback(response,status,config)

    	{

             callback(response)
    	}
    	function errorcallback(response,status,config)

    	{

             callback(response)
    	}


    	

    	










    }
    
  }
});

