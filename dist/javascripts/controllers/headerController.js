define(['app'], function (app) {

  var injectParams = ['$scope','$location','authenticationService'];

  var headerController = function ($scope,$location,authenticationService) {
    $scope.isNavCollapsed = true;
    $scope.authenticationService = authenticationService;

    $scope.$watch('authenticationService.isSignin()', function(newValue, oldValue) {
      $scope.isSignin = newValue;
    });

    $scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) == 0;
    };

    $scope.signout = function () {
        authenticationService.signout();
    };
  };

  headerController.$inject = injectParams;

  app.controller('headerController', headerController);

});
