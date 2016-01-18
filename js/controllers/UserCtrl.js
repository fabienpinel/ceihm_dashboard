/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('UserCtrl', ['$scope', '$routeParams', 'UsersFactory',
function ($scope, $routeParams, UsersFactory) {
    $scope.user = UsersFactory.getUserById($routeParams.userId);
    console.log($scope.user);
}]);