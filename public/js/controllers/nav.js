angular.module('ctrl.nav', [])
.controller('navCtrl',
  function($scope) {
    $scope.navState = '';
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
    $scope.toggleNav = function(navState) {
      if (navState != 'collapsed') {
        $scope.navState = 'collapsed';
      } else {
        $scope.navState = '';
      }
      return $scope.navState;
    };
  });