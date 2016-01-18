/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('LoginCtrl', ['$scope', 'LoginFactory','$mdToast','$rootScope', '$location', function ($scope, LoginFactory, $mdToast, $rootScope, $location) {

    $scope.login = function(){
        var loginSuccess = LoginFactory.login($scope.user.mail, $scope.user.password);
        $mdToast.show(
            $mdToast.simple()
                .content('Login '+(loginSuccess?"success":"error"))
                .hideDelay(3000)
        );
        $rootScope.logged = true;
        $rootScope.user = loginSuccess;
        localStorage.setItem('user', loginSuccess);
        $location.path("/posts");
    }
}]);