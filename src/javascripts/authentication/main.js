require.config({
    paths: {
        jquery: '../lib/jquery',
        bootstrap: '../lib/bootstrap',
        angular: '../lib/angular',
        'angular-route': '../lib/angular-route'
    },
    shim: {
        'jquery':{
          exports: '$'
        },
        'bootstrap':{
          deps: ['jquery'],
          exports: '_bootstrap'
        },
        'angular': {
          exports: 'angular'
        },
        'angular-route': {
          deps: ['angular'],
          exports: 'ngRoute'
        }
    }
});

require(['jquery','bootstrap'], function($, _bootstrap){
        return {};
});


require(['angular','routes','./app'], function(angular){
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
   });
});
