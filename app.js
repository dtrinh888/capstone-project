angular.module('MovieFinder', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				//home page route
				templateUrl: ''
			})
			.when('', {
				//search movie detail page
				controller:'',
				templateUrl:'' 
			})
			.when('', {
				//drop down category search page
				controller: '',
				templateUrl: ''
			})
			.when('', {
				//single movie detail page
				controller: '',
				templateUrl: ''
			});
		})
	.factory('', ['$http', function($http){
		//factory for home page displaying top rated movies of all time
	}])
	.factory('', ['$http', function($http){
		//factory for auto-complete search bar
	}])
	.factory('', ['$http', function($http){
		//factory for dropdown
	}])
	.factory('', ['$http', function($http){
		//
	}])