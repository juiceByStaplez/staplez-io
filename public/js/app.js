var app = angular.module('sio', ['ngRoute', 'ngAnimate', 'ngTouch', 'appRoutes', 'sio.ctrl', 'sio.directives', 'sio.srv', 'sio.animations'])

angular.module('sio.ctrl', ['ctrl.main', 'ctrl.nav', 'ctrl.skills', 'ctrl.contact','ctrl.work', 'ctrl.user'])
angular.module('sio.srv', ['srv.contact'])