angular.module('ceihm', ['ngRoute', 'ngMaterial']);

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

    $rootScope.showAdvanced = function(ev) {

        if ($location.path() == '/posts') {
            $mdDialog
                .show({
                    controller: DialogController,
                    templateUrl: 'views/add-dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true
                })
                .then(function(post) {
                    if (post && post.title && post.content && post.name) PostsFactory.addPost(post.title, post.content, post.name, post.tags);
                });
        } else {
            $mdDialog
                .show({
                    controller: DialogCommentController,
                    templateUrl: 'views/comment-dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true
                })
                .then(function(comment) {
                    if (comment && comment.content && comment.name) {
                        PostsFactory.addComment($route.current.params.id, comment.content, comment.name);
                        console.log('coucou');
                    }

                });
        }

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