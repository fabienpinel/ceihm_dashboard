/**
 * Created by fabienpinel on 18/01/16.
 */
/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('SigninCtrl', ['$scope', 'SigninFactory','$mdToast',  function ($scope, SigninFactory, $mdToast) {

    $scope.signin = function(){
        var singinSuccess = SigninFactory.signin($scope.user.firstname, $scope.user.lastname,$scope.user.mail,$scope.user.password);
        $mdToast.show(
            $mdToast.simple()
                .content('Singin success : '+singinSuccess)
                .hideDelay(3000)
        );
    }
}]);