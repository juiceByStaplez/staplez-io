var app = angular.module('sio', ['ngRoute', 'appRoutes', 'sio.ctrl'])

angular.module('sio.ctrl', ['ctrl.main', 'ctrl.sidebar'])