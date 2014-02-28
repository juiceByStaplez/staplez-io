angular.module('ctrl.skills', [])
.controller('skillsCtrl', function($scope) {
  $scope.pageClass = 'page-skills';
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
    name: 'jquery',
    title: 'jQuery',
    category: 'front-end',
    experience: 2,
    description: 'Mostly with Wordpress'
  },
  {
    name: 'php',
    title: 'PHP',
    category: 'back-end',
    experience: 2,
    description: 'Mostly with Wordpress'
  },
  {
    name: 'ruby',
    title: 'Ruby on Rails',
    category: 'front-end',
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
    name: 'angular',
    title: 'AngularJS',
    category: 'front-end',
    experience: 1,
    description: 'Using AngularJS for the front-end of web apps'
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
}
];
});