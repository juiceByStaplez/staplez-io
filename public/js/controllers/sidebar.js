angular.module('ctrl.sidebar', [])
.controller('sidebarCtrl', function($scope) {
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
});