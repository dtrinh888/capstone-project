MovieFinder
	.directive('movieSearch', function(){
		return{
			templateUrl: 'js/movie-search/movie-search.html',
			restrict: 'E',
			transclude: true
		};
	});