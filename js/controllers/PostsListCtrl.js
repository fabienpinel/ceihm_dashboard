angular.module('ceihm').controller('PostsListCtrl', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {


    var vm = this;

    vm.filterPosts ='';
    vm.reverse = true;
    vm.posts = PostsFactory.getPosts();

    vm.post = {};

    vm.search = '';

    vm.addPost = function () {
        PostsFactory.addPost(vm.post.title, vm.post.content, vm.post.name);
        vm.post = {};
    };

    vm.filterPost = function(filter) {
        vm.reverse = (vm.filterPosts === filter) ? !vm.reverse : false;
        vm.filterPosts = filter;
    }

}]);