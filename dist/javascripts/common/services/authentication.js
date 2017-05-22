define(['app'], function (app) {

  var injectParams = ['$window', '$http'];

  var authenticationFactory = function ($window, $http, $rootScope) {

    var factory = {};

    factory.signin = function (email, password) {
      return $http.post('/api/signin', {'email': email, 'password': password })
          .then(function (response) {
            $window.localStorage['token'] = response.data.token;
            return false;
          },
          function (response) {
            return true;
          }
        )
    };

    factory.signup = function (email, password, first_name, last_name) {
      return $http.post('/api/signup', {'email': email, 'password': password,'first_name': first_name, 'last_name': last_name })
          .then(function (response) {
            $window.localStorage['token'] = response.data.token;
            return false;
          },
          function (response) {
            return true;
          }
        )
    };

    factory.signout = function (){
      $window.localStorage['token'] = '';
    };

    factory.isSignin = function(){
      if($window.localStorage['token']){
        return true;
      }
      return false;
    };

    factory.getToken = function(){
      // if(isSignin){
        return $window.localStorage['token'];
      // }
      // return false;
    }

    return factory;
  };

    authenticationFactory.$inject = injectParams;

    app.factory('authenticationService', authenticationFactory);

});
