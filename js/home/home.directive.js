console.log('home');
MovieFinder
	.directive('mfHome', function(){
		return {
			templateUrl: 'js/home/home.html',
			restrict: 'E',
			transclude: false,
			scope: true
		};
	});