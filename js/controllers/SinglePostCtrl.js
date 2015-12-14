angular.module('ceihm').controller('SinglePostCtrl', ['$scope', '$routeParams', 'PostsFactory', function ($scope, $routeParams, PostsFactory) {

    $scope.post = PostsFactory.getPostById($routeParams.id);

}]);