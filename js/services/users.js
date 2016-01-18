/**
 * Created by fabienpinel on 18/01/16.
 */
angular.module('ceihm').factory('UsersFactory', [function () {

    var users = [
        {"id": 0, "firstname": "coucou", "lastname": "coucou", "mail": "coucou@coucou.coucou", "password": "pass"},
        {"id": 1, "firstname": "Browning", "lastname": "Morse", "mail": "browning.morse@hotmail.com", "password": "pass"},
        {"id": 2, "firstname": "Bates", "lastname": "Rocha", "mail": "bates.rocha@gmail.com", "password": "pass"},
        {"id": 3, "firstname": "Hull", "lastname": "Hale", "mail": "hull.hale@gmail.com", "password": "pass"},
        {"id": 4, "firstname": "Dejesus", "lastname": "Wong", "mail": "dejesus@wong.com", "password": "pass"},
        {"id": 5, "firstname": "Pearl", "lastname": "Michel", "mail": "michel.pearl@orange.fr", "password": "pass"},
        {"id": 6, "firstname": "Dunlap", "lastname": "Whitney", "mail": "dunlap.whitney@voila.fr", "password": "pass"},
        {"id": 7, "firstname": "Noelle", "lastname": "Welch", "mail": "noelledu06@hotmail.fr", "password": "pass"}
    ];
    var id = 8;

    return {
        signin: function (firstname, lastname, mail, pass) {
            var us = {
                firstname: firstname,
                lastname: lastname,
                mail: mail,
                password: pass,
                id: id++
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
        },
        getUserById: function (userId) {
            for (var i in users) {
                if (users[i].id == userId) {
                    return users[i];
                }
            }
            return null;
        }
    };
}]);