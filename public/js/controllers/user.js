angular.module('ctrl.user', [])
.controller('userController',
  function($scope) {
    $scope.username = 'Matthew McKey';
    $scope.job = 'Web Developer';
  });