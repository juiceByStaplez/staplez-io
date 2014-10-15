angular.module('ctrl.skills', [])
.controller('skillsCtrl', function($scope) {
  $scope.pageClass = 'skills';
  $scope.pageTitle = 'Skills';
  $scope.activeCategory = undefined;
  $scope.activeSkill = '';
  $scope.setCat = function(category) {
    $scope.activeSkill = undefined;
    $scope.activeCategory = category;
    if (category != undefined) {
      $scope.categoryName = category.split('-').join(' ');
    }
  };
  $scope.setActiveSkill = function(skill) {
    $scope.activeSkill = skill;
    $scope.activeCategory = skill.category;
  };
  $scope.skills = [
  {
    name: 'html',
    title: 'HTML5',
    category: 'front-end',
    experience: 3,
    description: 'Writing mark-up for my projects.'
  },
  {
    name: 'css',
    title: 'CSS3',
    category: 'front-end',
    experience: 3,
    description: 'Writing styles for pages.'
  },
  {
    name: 'js',
    title: 'Javascript',
    category: 'front-end',
    experience: 2,
    description: 'Mostly with Wordpress and/or popular Javascript frameworks.'
  },
  {
    name: 'angular',
    title: 'AngularJS',
    category: 'front-end',
    experience: 1,
    description: 'For front-end templating'
  },
  {
    name: 'wordpress',
    title: 'Wordpress',
    category: 'back-end',
    experience: 2,
    description: 'Building interactive sites along with customized content management experiences for clients.'
  },
  {
    name: 'ruby',
    title: 'Ruby on Rails',
    category: 'back-end',
    experience: 2,
    description: 'Writing web apps with Ruby on Rails'
  },
  {
    name: 'node',
    title: 'NodeJS',
    category: 'back-end',
    experience: 1,
    description: 'Using NodeJS in projects, primarily as a web server. Also, using various Command Line Interfaces written with NodeJS to enhance front-end workflow.'
  },
  {
    name: 'mysql',
    title: 'MySQL',
    category: 'back-end',
    experience: 1,
    description: 'Writing SQL primarily for use in proprietary Point of Sales software.'
  },
  {
    name: 'grunt',
    title: 'Grunt',
    category: 'back-end',
    experience: 1,
    description: 'To automate repetitive tasks front-end tasks such as concatenation and minification of scripts and stylesheets.'
  },
  {
    name: 'bower',
    title: 'Bower',
    category: 'package-manager',
    experience: 1,
    description: 'Using Bower to manage front-end assets.'
  },
  {
    name: 'yeoman',
    title: 'Yeoman',
    category: 'package-manager',
    experience: 1,
    description: 'Scaffolding apps using Yeoman generators. I personally love the yo-wordpress generator.'
  },
  {
    name: 'digital-ocean',
    title:'Digital Ocean',
    category: 'deployment',
    experience: 2,
    description: 'Deploying multiple sites/apps in various production environments.'
  }
  ];
});