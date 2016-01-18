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
            console.log('trying to login as '+mail+'/'+pass);
            angular.forEach(users, function(u) {
                console.log(u.mail);
                if(u.mail == mail) {
                    console.log("correspondance mail "+pass);
                    return (u.password == pass);
                }
            });
            return false;
        }
    };
}]);