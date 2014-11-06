angular.module('ctrl.work', [])
.controller('workCtrl',  function($scope){
  $scope.pageClass = 'work';
  $scope.pageTitle = 'Work';
  $scope.jobs = [
   {
      name: 'computer Heaven',
      from: '05-16-2014',
      to: '11-01-2014',
      url: 'computerheaven.com',
      title: 'Web Developer / Programmer',
      description: 'Began working at Computer Heaven in May of 2014, while there I created & maintained websites for our different clients, as well as programming features & bug fixes for our in-store Point of Sales system.'
   },
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