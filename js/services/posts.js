angular.module('ceihm').factory('PostsFactory', [function () {

    var posts = [
        {id: 1, title: 'title 1'},
        {id: 2, title: 'title 2'},
        {id: 3, title: 'title 3'},
        {id: 4, title: 'title 4'},
        {id: 5, title: 'title 5'},
        {id: 6, title: 'title 6'},
        {id: 7, title: 'title 7'}
    ];

    return {
        getPosts: function () {
            return posts;
        },
        getPostById: function (id) {
            for (var i in posts) {
                if (posts[i].id == id) {
                    return posts[i];
                }
            }
            return null;
        }
    }
}]);