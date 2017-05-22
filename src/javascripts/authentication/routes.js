define(['angular', 'require', 'angular-route'], function (angular, require) {
  var app = angular.module('app', ['ngRoute']);
  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/signin', {
          templateUrl: 'templates/authentication/signin.html'
          controller: 'signinController',
          resolve: {
            keyName: function ($q) {
              var deferred = $q.defer();
              require(['controllers/signinController.js'], function (controller) {
                  $controllerProvider.register('signinController', controller);
              });
              return deferred.promise;
            }
          }
      })
      .when('/signup',{
        templateUrl: 'templates/authentication/signup.html'
      })
      .when('/user',{
        templateUrl:'templates/authentication/user.html'
      })
      .when('/download',{
        templateUrl:'templates/authentication/download.html'
      })
      .when('/download',{
        templateUrl:'templates/authentication/flap.html'
      })
      .otherwise({
        redirectTo: '/signin'
      });
    }
  ]);

  return app;
});
