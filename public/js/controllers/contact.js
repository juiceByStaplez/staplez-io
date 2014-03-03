angular.module('ctrl.contact', [])
.controller('contactCtrl', function($scope) {
  $scope.pageClass = 'contact';
  $scope.pageTitle = 'Contact';

  $scope.submitForm = function() {
    if ($scope.contactForm.$valid) {
    alert('our form is amazing!');
    }
   };
});