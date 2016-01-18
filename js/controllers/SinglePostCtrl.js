angular.module('ceihm').controller('SinglePostCtrl', ['$scope', '$routeParams', 'PostsFactory', '$rootScope', function ($scope, $routeParams, PostsFactory,$rootScope) {

    var vm = this;
    vm.post = PostsFactory.getPostById($routeParams.id);
    console.log(vm.post);

    vm.vote = function (up) {
        PostsFactory.voteForPost(vm.post.index, up);
    };

    vm.voteForComment = function (commentId, up) {
        PostsFactory.voteForComment(vm.post.index, commentId, up);
    };

    vm.addComment = function () {
        if ($rootScope.logged) {
            PostsFactory.addComment(vm.post.index, vm.comment, $rootScope.user.firstname + " " + $rootScope.user.lastname);
            vm.comment = '';
        }
    };

    vm.orderByLike = function(comment) {
        return comment.dislike - comment.like;
    };

}]);