angular.module('ctrl.nav', [])
.controller('navCtrl',
  function($scope) {
    $scope.navEntries = [
    {
      title: 'Skills',
      url: 'skills',
      icon: 'wrench'
    },
    {
      title: 'Work',
      url: 'work',
      icon: 'file-o'
    },
    {
      title: 'Contact',
      url: 'contact',
      icon: 'envelope-o'
    }
    ];
    $scope.isToggled = false;
  });