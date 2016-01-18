angular.module('ceihm').factory('PostsFactory', [function () {

    var posts = [
        {
            "index": "566ec8e58305e4e4f1acb15c",
            "like": 38,
            "dislike": 10,
            "date": new Date(2015, 2, 14, 7, 58, 2),
            "name": "Browning Morse",
            "title": "Université Laval Canada",
            "content": "Mon expérience au sein de l'université Canadienne Laval a été pour moi une expérience unique. La résidence Turing à deux pas de l'université offre des logements à bas prix uniquement réservé au aux étrangers, Erasmus.\r\n",
            "tags": [
                "Polytechnique",
                "Canada",
                "Université",
                "Logement",
                "Cours"
            ],
            "comments": [
                {
                    "index": "566ec8e5002f92ea326e2510",
                    "like": 16,
                    "dislike": 0,
                    "date": new Date(2015, 2, 14, 18, 58, 2),
                    "name": "Bates Rocha",
                    "content": "La résidence à laquelle tu fais allusion est souvent pleine, il faut s'y prendre à l'avance (au moins un mois).\r\n"
                },
                {
                    "index": "566ec8e53a8ea65389ec4972",
                    "like": 19,
                    "dislike": 1,
                    "date": new Date(2015, 2, 14, 21, 58, 2),
                    "name": "Hull Hale",
                    "content": "J'aimerai également dire que les cours correspondent parfaitement à mon cursus (Polytech'Orléans).\r\n"
                }
            ]
        },
        {
            "index": "566ec8e50f49452d0464902b",
            "like": 33,
            "dislike": 2,
            "date": new Date(2015, 6, 3, 7, 58, 2),
            "name": "Dejesus Wong",
            "title": "Polytechnique Montreal",
            "content": "L'école est génial, plein de bonne rencontre, des cours géniaux. La résidence Touproc est un peu loin, mais est nettement moins chere que celle d'à côté. L'école a de nombreux cursus en biologie qui regroupe très bien ceux de Polytech",
            "tags": [
                "montreal",
                "polytechnique",
                "biologie"
            ],
            "comments": [
                {
                    "index": "566ec8e52bb269f654a2f726",
                    "like": 35,
                    "dislike": 2,
                    "date": new Date(2015, 6, 3, 18, 58, 2),
                    "name": "Pearl Michael",
                    "content": "Il y a une autre résidence juste à côté : Studicity, elle est réservé pour les français, tu pourra y faire plein de rencontre.\r\n"
                }
            ]
        },
        {
            "index": "566ec8e5704959939a9c0c11",
            "like": 5,
            "dislike": 0,
            "date": new Date(2016, 1, 2, 18, 58, 2),
            "name": "Dunlap Whitney",
            "title": "Ecole chinoise",
            "content": "L'école Noob In'Genieur est vraiment mauvaise, les profs sont souvent absent et les cours que l'on a choisit à distance ne correspondent pas, les autres étrangers que j'ai rencontré on eu le même problème que moi. Je ne la recommande pas.\r\n",
            "tags": [
                "chine",
                "cours"
            ],
            "comments":[]
        },
        {
            "index": "566ec8e5fd03869fd3bb7014",
            "like": 2,
            "dislike": 1,
            "date": new Date(2014, 1, 20, 18, 12, 2),
            "name": "Noelle Welch",
            "title": "Université du Vietnam",
            "content": "Université Vouand'On'Di géniale. Logement et restauration dans l'université.\r\n",
            "tags": [
                "vietnam",
                "asie",
                "logement"
            ],
            "comments":[]
        }
    ];

    var _index = 0;

    return {
        getPosts: function () {
            return posts;
        },
        getPostById: function (index) {
            for (var i in posts) {
                if (posts[i].index == index) {
                    return posts[i];
                }
            }
            return null;
        },
        addPost: function (title, content, name, tags) {
            posts.push({
                name: name,
                title: title,
                content: content,
                comments: [],
                tags: tags,
                like: 0,
                index: _index++
            });
        },
        addComment: function (postId, commentContent, name) {
            for (var i in posts) {
                if (posts[i].index == postId) {
                    posts[i].comments.push({
                        name: name,
                        content: commentContent,
                        like: 0,
                        dislike: 0,
                        index: _index++,
                        date: new Date()
                    });
                    break;
                }
            }
        },
        voteForPost: function (postIndex, up) {
            for (var i in posts) {
                if (posts[i].index == postIndex) {
                    if (up) posts[i].like ++;
                    else posts[i].dislike ++;
                    break;
                }
            }
        },
        voteForComment: function (postIndex, commentIndex, up) {
            for (var i in posts) {
                if (posts[i].index == postIndex) {
                    for (var j in posts[i].comments) {
                        if (posts[i].comments[j].index == commentIndex) {
                            if (up) posts[i].comments[j].like ++;
                            else posts[i].comments[j].dislike ++;
                        }
                    }
                    break;
                }
            }
        }
    }
}]);