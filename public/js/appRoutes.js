angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider',
 function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'views/home.html',
    controller: 'mainCtrl'
  })
  .when('/skills', {
    templateUrl: 'views/skills.html',
    controller: 'skillsCtrl'
  });

  $locationProvider.html5Mode(true);
 }]);