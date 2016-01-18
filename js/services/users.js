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
        register: function (firstname, lastname, mail, pass) {
            users.push({
                firstname: firstname,
                lastname: lastname,
                mail: mail,
                password: pass
            });
            return users;
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