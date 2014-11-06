/*! staplezio - v0.0.0 - 2014-11-06
* Copyright (c) 2014 ; Licensed  */
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
angular.module('ctrl.main', [])
.controller('mainCtrl', function($scope) {
  $scope.pageClass = 'home';
  $scope.pageTitle = 'Home';

  $scope.pageText = 'Welcome to staplez.io, my online interactive portfolio';
});
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
    $scope.toggleNav = function(navState) {
      if (navState != 'collapsed') {
        $scope.navState = 'collapsed';
      } else {
        $scope.navState = '';
      }
      return $scope.navState;
    };
    $scope.collapseNav = function(navState) {
      console.log(navState);
    };
  });
angular.module('ctrl.sidebar', [])
.controller('sidebarCtrl', function($scope) {
});
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
angular.module('ctrl.user', [])
.controller('userCtrl',
  function($scope) {
    $scope.username = 'staplez';
    $scope.job = 'Web Developer';
  });
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