var app = angular.module('sio.directives', [])
app.directive('toggle', function() {
  'use strict';
  return {
    priority: 0,
    restrict: 'E',
    templateUrl: '../views/toggle.html',
    transclude: true,
    controller: 'navCtrl'
  }
});