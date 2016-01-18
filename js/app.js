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
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl as Login'
         }).
    when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl as Signin'
    }).
        otherwise({
            redirectTo: '/posts'
        });

}]);


angular.module('ceihm').run(['$rootScope', '$mdDialog', 'PostsFactory', '$location', '$route', function ($rootScope, $mdDialog, PostsFactory, $location, $route) {

    $rootScope.text = function () {
        return $location.path() == '/posts' ? 'Post' : 'Commentaire';
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
