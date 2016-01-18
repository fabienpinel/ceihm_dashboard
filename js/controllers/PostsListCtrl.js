angular.module('ceihm').controller('PostsListCtrl', ['$scope', 'PostsFactory', '$location', function ($scope, PostsFactory, $location) {


    var vm = this;

    vm.filterPosts = 'like';
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
    };

    vm.searchThisTag = function(tag) {
        vm.search = tag;
    };

    vm.go = function(index){
        console.log(index);
        var earl = '/posts/' + index;
        $location.path(earl);
    };
}]);