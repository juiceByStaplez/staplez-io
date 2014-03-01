angular.module('ctrl.skills', [])
.controller('skillsCtrl', function($scope) {
  $scope.pageClass = 'skills';
  $scope.pageTitle = 'Skills';
  $scope.activeCategory = '';
  $scope.setCat = function(category) {
    $scope.activeCategory = category;
  };
  $scope.skills = [
  {
    name: 'html',
    title: 'HTML5',
    category: 'front-end',
    experience: 3,
    description: 'Writing mark-up'
  },
    {
    name: 'css',
    title: 'CSS3',
    category: 'front-end',
    experience: 3,
    description: 'Writing styles for pages'
  },
  {
    name: 'js',
    title: 'Javascript',
    category: 'front-end',
    experience: 2,
    description: 'Mostly with Wordpress'
  },
    {
    name: 'angular',
    title: 'AngularJS',
    category: 'front-end',
    experience: 1,
    description: 'Using AngularJS for the front-end of web apps'
  },
  {
    name: 'wordpress',
    title: 'Wordpress',
    category: 'back-end',
    experience: 2,
    description: 'Mostly with Wordpress'
  },
  {
    name: 'ruby',
    title: 'Ruby on Rails',
    category: 'back-end',
    experience: 3,
    description: 'Writing web apps with Ruby on Rails'
  },
  {
    name: 'node',
    title: 'NodeJS',
    category: 'back-end',
    experience: 1,
    description: 'Using NodeJS in projects'
  },
{
  name: 'grunt',
  title: 'Grunt',
  category: 'back-end',
  experience: 1,
  description: 'Using GruntJS to automate repetitive tasks'
},
{
  name: 'bower',
  title: 'Bower',
  category: 'package-manager',
  experience: 1,
  description: 'Using Bower to manage front-end assets'
},
{
  name: 'yeoman',
  title: 'Yeoman',
  category: 'package-manager',
  experience: 1,
  description: 'Scaffolding apps using Yeoman generators.'
},
{
  name: 'digital-ocean',
  title:'Digital Ocean',
  category: 'deployment',
  experience: 1,
  description: 'Deploying multiple sites/apps in various production environments.'
}
];
});