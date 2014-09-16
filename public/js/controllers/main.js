angular.module('ctrl.main', [])
.controller('mainCtrl', function($scope) {
  $scope.pageClass = 'home';
  $scope.pageTitle = 'Home';

  $scope.pageText = 'Welcome to staplez.io! My online interactive portfolio';
});