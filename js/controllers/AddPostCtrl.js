/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('AddPostCtrl', ['$rootScope','$scope', 'PostsFactory', '$location', function ($rootScope, $scope, PostsFactory, $location) {
    $scope.addPost = function () {
        PostsFactory.addPost($scope.post.title, $scope.post.content, $rootScope.user.firstname+" "+$rootScope.user.lastname, []);
        $location.path("/posts");
    };
}]);