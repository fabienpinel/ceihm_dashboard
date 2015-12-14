angular.module('ceihm', ['ngRoute', 'ngMaterial']);

angular.module('ceihm').config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/posts', {
            templateUrl: 'views/posts_list.html',
            controller: 'PostsListCtrl'
        }).
        when('/posts/:id', {
            templateUrl: 'views/single_post.html',
            controller: 'SinglePostCtrl'
        }).
        otherwise({
            redirectTo: '/posts'
        });

}]);