

// Angular instance

var rockApp = angular.module('rockApp', ['ngRoute','ngResource']);

rockApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/home', {templateUrl: 'home.html',   controller: 'appController'}).
                when('/programa', {templateUrl: 'programa.html',   controller: 'appController'}).
                when('/tema', {templateUrl: 'tema.html',   controller: 'appController'}).
                when('/midia', {templateUrl: 'midia.html',   controller: 'appController'}).
                when('/banda', {templateUrl: 'banda.html',   controller: 'appController'}).
                otherwise({redirectTo: '/home'});
}]);


rockApp.controller('appController', function($scope, $resource){
	$scope.tab = 1;
	
	$scope.temas = [
		{ sub: 'Hard Rock', status: 'atual', data: '22/11/2014', hora: '21:00', banda: 'Johnnybox' },
		{ sub: 'Indie Rock', status: 'proximo', data: '29/11/2014', hora: '21:00' },
		{ sub: 'Punk Rock', status: 'proximo', data: '06/12/2014', hora: '21:00' },
		{ sub: 'Grunge', status: 'proximo', data: '13/12/2014', hora: '21:00' },
		{ sub: 'Rockabilly', status: 'proximo', data: '20/12/2014', hora: '21:00' },
		{ sub: 'Primeiros Anos', status: 'proximo', data: '27/12/2014', hora: '21:00' },
		{ sub: 'Funk Rock', status: 'proximo', data: '03/01/2015', hora: '21:00' },
		{ sub: 'Metal', status: 'proximo', data: '10/01/2015', hora: '21:00' },
		{ sub: 'Glam Rock', status: 'proximo', data: '17/01/2015', hora: '21:00' },
		{ sub: 'Rock Alternativo', status: 'proximo', data: '24/11/2015', hora: '21:00' },
	];

	// CENTRALIZE VIDEO

	alturaVideo = $('.fullscreen video').height();
	marginVideo = (alturaVideo/2)* -1;

	// TRIGGER VIDEO

	$('.videoTrigger').on('click', function(){
		var listVideo = $(this).data( "videoid" );
		//$('.fullscreen-video-src').attr("src","http://rafaelpradella.com.br/video/" + listVideo +".mp4");
		$('.fullscreen-video-src').attr("src","video/" + listVideo +".mp4");
		$('.fullscreen video').css('margin-top', marginVideo)
		$('.fullscreen').addClass('active')
	});


	$('.fullscreen-close').click(function(){
		$('.fullscreen').removeClass('active')

	});

});


$('.tbar-cal').click(function() {

	    if ($('.agenda').hasClass('menuIsOpen')) {
	        $('.agenda, .tbar-cal').removeClass('menuIsOpen');
	    }

	    else {
	        $('.agenda, .tbar-cal').addClass('menuIsOpen');
	    }

});








