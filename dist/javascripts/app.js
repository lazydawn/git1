define(['angular'], function (angular) {

    var app = angular.module('app', ['ngRoute','ui.bootstrap','routeResolverServices']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide) {

            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            var route = routeResolverProvider.route;

            $routeProvider
                .when('/signin', route.resolve('signin'))
                .when('/signup', route.resolve('signup'))
                .when('/user', route.resolve('user'))
                .when('/download', route.resolve('download'))
                .when('/flap', route.resolve('flap'))
                .when('/home', route.resolve('home'))
                // .when('/customeredit/:customerId', route.resolve('CustomerEdit', 'customers/', 'vm', true))
                // .when('/orders', route.resolve('Orders', 'orders/', 'vm'))
                // .when('/about', route.resolve('About', '', 'vm'))
                // .when('/login/:redirect*?', route.resolve('Login', '', 'vm'))
                .otherwise({ redirectTo: '/home' });

    }]);

    return app;

});
