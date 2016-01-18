angular.module('ceihm').controller('SinglePostCtrl', ['$scope', '$routeParams', '$mdToast','PostsFactory', '$rootScope','$location', function ($scope, $routeParams, $mdToast,PostsFactory,$rootScope, $location) {

    var vm = this;
    vm.post = PostsFactory.getPostById($routeParams.id);
    console.log(vm.post);

    vm.vote = function (up) {
        if($rootScope.logged){
            PostsFactory.voteForPost(vm.post.index, up);
        }else{
            //toast
            vm.displayToast();
        }
    };

    vm.voteForComment = function (commentId, up) {
        if($rootScope.logged){
            PostsFactory.voteForComment(vm.post.index, commentId, up);
        }else{
            //toast
            vm.displayToast();
        }
    };

    vm.addComment = function () {
        if ($rootScope.logged) {
            PostsFactory.addComment(vm.post.index, vm.comment, $rootScope.user.firstname + " " + $rootScope.user.lastname, $rootScope.user.id);
            vm.comment = '';
        }
    };

    vm.orderByLike = function(comment) {
        return comment.dislike - comment.like;
    };
    vm.displayToast = function(){
        $mdToast.show(
            $mdToast.simple()
                .content('Vous devez être connecté pour voter.')
                .hideDelay(3000)
        );
    }
    vm.searchThisTag = function (tag) {
        $location.path('/posts');
        $location.search('search', tag);
    }
}]);