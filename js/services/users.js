/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').factory('UsersFactory', [function () {

    var users = [
        {
            "firstname": "coucou",
            "lastname": "coucou",
            "mail": "coucou@coucou.coucou",
            "password": "pass",

        }
    ];

    return {
        signin: function (firstname, lastname, mail, pass) {
            var us = {
                firstname: firstname,
                lastname: lastname,
                mail: mail,
                password: pass
            };
            users.push(us);
            return us;
        },
        login: function (mail, pass) {
            var returned = false;
            angular.forEach(users, function(u) {
                if(u.mail == mail) {
                    if(u.password==pass){
                        returned = u;
                    }
                }
            });
            return returned;
        }
    };
}]);