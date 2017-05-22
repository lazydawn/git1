define(['app'], function (app) {

  var injectParams = ['$scope','$location', 'authenticationService'];

  var signupController = function ( $scope,$location , authenticationService) {
    var vm = this;
    $scope.authenticationService = authenticationService;
    $scope.isWrongInput=false;
    $scope.$watch('authenticationService.isSignin()', function(newValue, oldValue) {
      if(newValue){
        $location.path('/home');
      }
    });

    vm.signup = function () {
      authenticationService.signup(vm.email, vm.password, vm.first_name, vm.last_name).then(function(result){
        $scope.isWrongInput=result;
      });
    };

  };

  signupController.$inject = injectParams;

  app.register.controller('signupController', signupController);

});
