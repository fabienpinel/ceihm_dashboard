angular.module('ceihm', ['ngRoute', 'ngMaterial', 'ngMessages']);

angular.module('ceihm').config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/posts', {
            templateUrl: 'views/posts_list.html',
            controller: 'PostsListCtrl as PostsList'
        }).
        when('/posts/:id', {
            templateUrl: 'views/single_post.html',
            controller: 'SinglePostCtrl as SinglePost'
        }).
        otherwise({
            redirectTo: '/posts'
        });

}]);


angular.module('ceihm').run(['$rootScope', '$mdDialog', 'PostsFactory', '$location', '$route',function ($rootScope, $mdDialog, PostsFactory, $location, $route) {

    $rootScope.text = function () {
        return $location.path() == '/posts' ? 'Post' : 'Commentaire';
    };

    $rootScope.showAdvanced = function(ev) {

            $mdDialog
                .show({
                    controller: DialogController,
                    templateUrl: 'views/signin.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true
                })
                .then(function(post) {
                    if (post && post.title && post.content && post.name) PostsFactory.addPost(post.title, post.content, post.name, post.tags);
                });


    };

}]);

function DialogController ($scope, $mdDialog) {
    $scope.post = {tags:[]};

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function() {
        $mdDialog.hide($scope.post);
    };
}

function DialogCommentController ($scope, $mdDialog) {
    $scope.comment = {};

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function() {
        $mdDialog.hide($scope.comment);
    };
}