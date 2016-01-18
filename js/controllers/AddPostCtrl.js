angular.module('ceihm').directive('ngSpace', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 32) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngSpace);
                });

                event.preventDefault();
            }
        });
    };
});

/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').controller('AddPostCtrl', ['$rootScope','$scope', 'PostsFactory', '$location', function ($rootScope, $scope, PostsFactory, $location) {


    $scope.post = {tags:[]};

    $scope.addPost = function () {
        PostsFactory.addPost($scope.post.title, $scope.post.content, $rootScope.user.firstname+" "+$rootScope.user.lastname, $scope.post.tags);
        $location.path("/posts");
    };

    $scope.addTag = function () {
        if ($scope.newTag) {
            $scope.post.tags.push($scope.newTag);
            $scope.newTag = '';
        }
    }

}]);