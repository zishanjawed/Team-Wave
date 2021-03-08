'use strict';

angular.module('posts').
component('postList',{
	templateUrl:'static/blog/partials/main.html',
	controller:function(Posts,$scope,$http){


		$scope.getName=function(){
		$scope.query='https://api.stackexchange.com/2.2/questions?'



         if ($scope.page)
         {
             $scope.query=$scope.query + 'page=' + $scope.page + '&'
         }

         if ($scope.pagesize)
         {
             $scope.query=$scope.query + 'pagesize=' + $scope.pagesize+'&'
         }
         if ($scope.fromdate)
         {
             $scope.query=$scope.query + 'fromdate=' + $scope.fromdate +'&'
         }
         if ($scope.todate)
         {
             $scope.query=$scope.query + 'todate=' + $scope.todate+"&"
         }
          if ($scope.order)
         {
             $scope.query=$scope.query + 'order=' + $scope.order+'&'
         }
         else
         {
         	$scope.query=$scope.query + 'order=desc&'
         }
         if ($scope.min_)
         {
             $scope.query=$scope.query + 'min_=' + $scope.min_+'&'
         }
         if ($scope.max_)
         {
             $scope.query=$scope.query + 'max_=' + $scope.max_+'&'
         }
        if ($scope.sort)
         {
             $scope.query=$scope.query + 'sort=' + $scope.sort+'&'
         }
         else
         {
         	 $scope.query=$scope.query + 'sort=activity&'

         }
         if ($scope.tag)
         {
             $scope.query=$scope.query + 'tagged=' + $scope.tag+'&'
         }
         

         $scope.query=$scope.query + 'site=stackoverflow'

         Posts.query($scope.query,function(successcallback){





                  console.log(successcallback)
                  $scope.product_rows=successcallback.data

                  $scope.value=successcallback.data.error_name

                  $scope.error=successcallback.data.error_message

                  $scope.id=successcallback.data.error_id



                  $scope.throttle=successcallback.data.detail
                  $scope.status=successcallback.status
                  $scope.statusText=successcallback.statusText
               

         })




  
          

		}


		
}

		

	
	
});