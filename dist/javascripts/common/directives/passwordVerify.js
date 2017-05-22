define(['app'], function (app) {
  var passwordVerifyDirective = function(){
    var link = function(scope, element, attributes, controller){

      controller.$validators.passwordVerify = function(modelValue) {
          return modelValue == scope.otherModelValue;
      };

      scope.$watch("otherModelValue", function() {
         controller.$validate();
      });
    }
    return {
            require: 'ngModel',
            scope: {
              otherModelValue: "=passwordVerify"
            },
            link: link
    };
  }

  app.directive('passwordVerify', passwordVerifyDirective);
});
