angular.module('ceihm').controller('SinglePostCtrl', ['$scope', '$routeParams', 'PostsFactory', function ($scope, $routeParams, PostsFactory) {

    var vm = this;
    vm.post = PostsFactory.getPostById($routeParams.id);

}]);