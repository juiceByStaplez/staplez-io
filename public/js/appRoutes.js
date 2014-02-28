angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider',
 function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'views/home.html',
  })
  .when('/skills', {
    templateUrl: 'views/skills.html',
  });

  $locationProvider.html5Mode(true);
 }]);