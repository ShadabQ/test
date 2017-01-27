var rootApp	=	angular.module("myApp",["myApp.config"]);
rootApp.controller("rootController",['$scope','url',function($scope,url){
	$scope.name="hello";
	alert(url);
}]);
