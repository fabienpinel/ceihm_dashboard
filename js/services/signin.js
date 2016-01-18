/**
 * Created by fabienpinel on 18/01/16.
 */
/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').factory('SigninFactory', ['UsersFactory', function (UsersFactory) {

    var factory = {
        signin: function (firstname, lastname, mail, password) {
            return UsersFactory.signin(firstname, lastname, mail, password);
        }
    };
    return factory;
}]);