var app = angular.module('sio', ['ngRoute', 'ngAnimate', 'appRoutes', 'sio.ctrl', 'sio.animations'])

angular.module('sio.ctrl', ['ctrl.main', 'ctrl.nav', 'ctrl.skills', 'ctrl.contact','ctrl.work', 'ctrl.user'])