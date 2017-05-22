(function () {
    angular
        .module('app')
        .service('authenticationService', authentication);

    authentication.$inject = ['$window','$http'];
    function authentication($window, $http) {
        var saveToken = function (token) {
            $window.localStorage['token'] = token;
        };
        var getToken = function () {
            return $window.localStorage['token'];
        };
        var signin = function(user) {
            return $http.post('/api/signin', user).success(function(data) {
                saveToken(data.token);
            });
        };
        var signup = function(user) {
            return $http.post('/api/signup', user).success(function(data) {
                saveToken(data.token);
            });
        };
        var signout = function() {
            $window.localStorage.removeItem('token');
        };

        var isSignin = function() {
            var token = getToken();
            if (token) {
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };
        var currentUser = function() {
            if (isSignin()) {
                var token = getToken();
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return {
                    email: payload.email,
                    name: payload.name,
                };
            }
        };


        return {
            saveToken: saveToken,
            getToken: getToken,
            signin: signin,
            signup: signup,
            signout: signout,
            isSignin: isLoggedIn,
            currentUser: currentUser,
        };
    }
});
