/**
 * Created by fabienpinel on 18/01/16.
 */
/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('SigninCtrl', ['$scope', 'SigninFactory','$mdToast',  '$rootScope', '$location', function ($scope, SigninFactory, $mdToast, $rootScope, $location) {

    $scope.signin = function(){
        var singinSuccess = SigninFactory.signin($scope.user.firstname, $scope.user.lastname,$scope.user.mail,$scope.user.password);
        $mdToast.show(
            $mdToast.simple()
                .content('Singin '+(singinSuccess ? "success":"error"))
                .hideDelay(3000)
        );

        $rootScope.logged = true;
        $rootScope.user = singinSuccess;
        localStorage.setItem('user', singinSuccess);
    }

}]);