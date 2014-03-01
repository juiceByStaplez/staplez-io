angular.module('ctrl.user', [])
.controller('userCtrl',
  function($scope) {
    $scope.username = 'staplez';
    $scope.job = 'Web Developer';
  });