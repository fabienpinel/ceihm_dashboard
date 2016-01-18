angular.module('ceihm').controller('SinglePostCtrl', ['$scope', '$routeParams', 'PostsFactory', function ($scope, $routeParams, PostsFactory) {

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
        console.log('coucou', vm.comment);
    };

}]);