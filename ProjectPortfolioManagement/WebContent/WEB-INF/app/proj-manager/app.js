/**
 * 	
 */

angular.module("projApp",['ngRoute','ui.bootstrap']);

angular.module("projApp").config(['$routeProvider','$logProvider',function($routeProvider,$logProvider){
	
	$logProvider.debugEnabled(true);
	
	$routeProvider
	.when('/',{
		templateUrl : 'app/proj-manager/partials/index.html',
		controller : 'ProjectCtrl'
	})
	.when('/newproject',{
		templateUrl : 'app/proj-manager/partials/add.html',
		controller : 'NewProjectCtrl'
	})
	
	.when('/portfolio',{
		templateUrl : 'app/proj-manager/partials/portfolio.html',
		controller:'PortFolioController'
	})
	.otherwise({
		redirectTo : '/'
	});
	
}]);