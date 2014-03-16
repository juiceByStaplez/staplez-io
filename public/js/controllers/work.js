angular.module('ctrl.work', [])
.controller('workCtrl',  function($scope){
  $scope.pageClass = 'work';
  $scope.pageTitle = 'Work';
  $scope.jobs = [
  {name: 'gatorworks',
    from: '8-28-2013',
    to: '2-28-2014',
    url: 'gatorworks.net',
    title: 'Lead Web Developer',
    description: 'As lead web developer at Gatorworks, my primary duties were converting designs from PSDs to HTML and then turning the static HTML into a completely custom Wordpress theme, including client-branded login screens.'
    },
    {
      name: 'dezinsInteractive',
      from: '11-1-2011',
      to: '8-28-2013',
      url: 'dezinsinteractive.com',
      title: 'Web Developer',
      description: 'Began working at dezinsINTERACTIVE as an intern, and after six months I was brought on as a part-time Web Developer which later became full-time.'
    }
  ];
});