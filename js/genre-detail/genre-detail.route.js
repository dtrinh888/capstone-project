//config block to create routes specific to searched category from dropdown

MovieFinder
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/genre/:genreId', {
			templateUrl: 'js/genre-detail/genre-detail.html',
			controller: 'GenreDetailCtrl'
		});
	}]);