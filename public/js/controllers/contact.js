angular.module('ctrl.contact', ['srv.contact'])
.controller('contactCtrl', function($scope, Contact) {
  $scope.pageClass = 'contact';
  $scope.pageTitle = 'Contact';
  $scope.submitted = false;
  $scope.formData = {};

  $scope.submitForm = function(formData) {
    if ($scope.contactForm.$valid) {
      Contact.send(formData);
      $scope.submitted = true;
    }
   };
});