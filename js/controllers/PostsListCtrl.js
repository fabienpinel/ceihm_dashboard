angular.module('ceihm').controller('PostsListCtrl', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {

    $scope.posts = PostsFactory.getPosts();

}]);