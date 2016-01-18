angular.module('ceihm', ['ngRoute', 'ngMaterial', 'ngMessages', 'yaru22.angular-timeago']);

angular.module('ceihm').config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/posts', {
            templateUrl: 'views/posts_list.html',
            controller: 'PostsListCtrl as PostsList',
            reloadOnSearch: false
        }).
        when('/posts/:id', {
            templateUrl: 'views/single_post.html',
            controller: 'SinglePostCtrl as SinglePost'
        }).
        when('/', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl as Maps'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl as Login'
         }).
        when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'SigninCtrl as Signin'
        })
        .when('/user/:userId', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl'
        }).
        when('/addPost', {
            templateUrl: 'views/addPost.html',
            controller: 'AddPostCtrl as AddPost'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);


angular.module('ceihm').run(['$rootScope', '$mdDialog', 'PostsFactory', '$location', '$route', function ($rootScope, $mdDialog, PostsFactory, $location, $route) {
    if(localStorage.getItem('user')){
        $rootScope.logged = true;
        $rootScope.user = JSON.parse(localStorage.getItem('user'));
    }

    $rootScope.text = function () {
        return $location.path() == '/posts' ? 'Post' : 'Commentaire';
    };
    $rootScope.disconnect = function(){
        $rootScope.logged = false;
        $rootScope.user = false;
        localStorage.removeItem('user');
    }
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
