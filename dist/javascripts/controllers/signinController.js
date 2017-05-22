define(['app'], function (app) {

  var injectParams = ['$scope','$location', 'authenticationService'];

  var signinController = function ( $scope,$location , authenticationService) {
    var vm = this;
    $scope.authenticationService = authenticationService;
    $scope.isWrongInput=false;
    $scope.$watch('authenticationService.isSignin()', function(newValue, oldValue) {
      if(newValue){
        $location.path('/home');
      }
    });

    vm.signin = function () {
      authenticationService.signin(vm.email, vm.password).then(function(result){
        $scope.isWrongInput=result;
      });
    };

  };

  signinController.$inject = injectParams;

  app.register.controller('signinController', signinController);

});
