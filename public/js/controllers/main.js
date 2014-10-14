angular.module('ctrl.main', [])
.controller('mainCtrl', function($scope) {
  $scope.pageClass = 'home';
  $scope.pageTitle = 'Home';

  $scope.pageText = 'Welcome to staplez.io, my online interactive portfolio.';
});