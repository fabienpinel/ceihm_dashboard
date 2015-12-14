angular.module('ceihm').controller('PostsListCtrl', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {

    $scope.posts = PostsFactory.getPosts();

    $scope.post = {};

    $scope.addPost = function () {
        PostsFactory.addPost($scope.post.title, $scope.post.content, $scope.post.name);
        $scope.post = {};
    }

}]);