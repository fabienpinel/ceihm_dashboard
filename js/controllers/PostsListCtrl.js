angular.module('ceihm').controller('PostsListCtrl', ['$scope','$rootScope', '$mdToast','PostsFactory', '$location','$routeParams', function ($scope,$rootScope, $mdToast,PostsFactory, $location, $routeParams) {


    var vm = this;

    vm.filterPosts = 'like';
    vm.reverse = true;
    vm.posts = PostsFactory.getPosts();

    vm.post = {};

    vm.search = $routeParams.search;

    vm.filterPost = function(filter) {
        vm.reverse = (vm.filterPosts === filter) ? !vm.reverse : false;
        vm.filterPosts = filter;
    };

    vm.searchThisTag = function(tag) {
        $location.search("search", tag);
        vm.search = tag;
    };

    vm.go = function(index){
        console.log(index);
        var earl = '/posts/' + index;
        $location.path(earl);
    };
    vm.updateURL = function(){
        console.log("update url");
        $location.search("search", vm.search);
    }
    vm.AddPostClick = function(){
        if(!$rootScope.logged){
            $mdToast.show(
                $mdToast.simple()
                    .content('Vous devez être connecté pour ajouter un article.')
                    .hideDelay(3000)
            );
        }else{
            $location.path("/addPost");
        }
    }
}]);