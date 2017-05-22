require.config({
    paths: {
        angular: 'lib/angular',
        ngRoute: 'lib/angular-route',
        ngAnimate: 'lib/angular-animate',
        ngTouch: 'lib/angular-touch',
        uib: 'lib/ui-bootstrap',
        headerController: 'controllers/headerController',
        routeResolver : 'common/services/routeResolver',
        authentication : 'common/services/authentication',
        passwordVerify : 'common/directives/passwordVerify'
    },
    shim: {
        'angular': {
          exports: 'angular'
        },
        'ngRoute': {
          exports: 'ngRoute',
          deps: ['angular']
        },
        'ngAnimate': {
          exports: 'ngAnimate',
          deps: ['angular']
        },
        'ngTouch': {
          exports: 'ngTouch',
          deps: ['angular']
        },
        'uib': {
          exports: 'uib',
          deps: ['angular', 'ngAnimate', 'ngTouch']
        }
    }
});

require(['angular','ngRoute','ngAnimate','ngTouch','uib',
  'app','headerController','routeResolver','authentication','passwordVerify'], function(angular){
    angular.bootstrap(document, ['app']);
});
