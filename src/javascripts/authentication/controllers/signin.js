define(['angular'], function (angular) {
  return function($scope, $http, $interval, authentication){
    var signinController = this;
    signinController.credentials = {
      email: '',
      password: ''
    };

    signinController.returnPage = $location.search().page || '/';
    signinController.onSubmit = function () {
          signinController.formError = "";
          if (!signinController.credentials.email || !signinController.credentials.password) {
              signinController.formError = "请输入邮箱和密码!";
              return false;
          } else {
              signinController.doSignin();
          }
      };
      signinController.doSignin = function () {
          signinController.formError = "";
          authentication.signin(signinController.credentials).error(function (err) {
              signinController.formError = err.message;
          }).then(function () {
              $location.search('page', null);
              $location.path(signinController.returnPage);
          });
      };
  }
});
