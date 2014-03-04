angular.module('srv.contact', [])
.factory('Contact', ['$http',
  function($http) {
    return {
      send: function(contactData) {
        return $http.post('/contact', contactData);
      }
    }
  }
  ])