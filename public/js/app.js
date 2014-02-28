var app = angular.module('sio', ['ngRoute', 'ngAnimate', 'appRoutes', 'sio.ctrl'])

angular.module('sio.ctrl', ['ctrl.main', 'ctrl.sidebar', 'ctrl.skills', 'ctrl.contact','ctrl.work'])