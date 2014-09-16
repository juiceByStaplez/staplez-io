angular.module('ctrl.main', [])
.controller('mainCtrl', function($scope) {
  $scope.pageClass = 'home';
  $scope.pageTitle = 'Home';

  $scope.pageContent = 'Welcome to staplez.io! My online interactive portfolio';
});