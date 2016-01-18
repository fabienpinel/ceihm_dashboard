/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('LoginCtrl', ['$scope', 'LoginFactory','$mdToast',  function ($scope, LoginFactory, $mdToast) {

    $scope.login = function(){
        var loginSuccess = LoginFactory.login($scope.user.mail, $scope.user.password);
        $mdToast.show(
            $mdToast.simple()
                .content('Login success : '+loginSuccess)
                .hideDelay(3000)
        );
    }
}]);