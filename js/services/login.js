/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').factory('LoginFactory', ['UsersFactory', function (UsersFactory){

    var factory = {
        login: function (email, password) {
            return UsersFactory.login(email, password);
        }
    };
    return factory;
}]);