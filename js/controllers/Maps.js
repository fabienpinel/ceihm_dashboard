angular.module('ceihm').controller('MapsCtrl', ['$scope','$location', function ($scope, $location) {


    var vm = this;

    $(function(){
        $('#world-map').css("height",($(window).height() - $("md-toolbar").height())+"px");

        function camelize(str) {
            return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                return match.toUpperCase();
            });
        }

        var gdpData = {
            "CA": 122,
            "CN": 80,
            "DE": 46,
            "US": 280,
            "EN": 84,
            "IT": 23,
            "TH": 12,
            "JP": 30,
            "RU": 12,
            "BE": 1,
            "ZA": 45,
            "AU": 22,
            "AR": 6,
            "CU": 1
    };

        $('#world-map').vectorMap({
            map: 'world_mill',
            regionStyle : {
                initial: {
                    'font-family': 'Verdana',
                    'font-size': '12',
                    'font-weight': 'bold',
                    cursor: 'default',
                    fill: 'whitesmoke'
                },
                hover: {
                    cursor: 'pointer',
                    fill: '#303F9F'
                }
            },
            series: {
                regions: [{
                    values: gdpData,
                    scale: ['#03A9F4', '#303F9F'],
                    normalizeFunction: 'polynomial'
                }]
            },
                onRegionTipShow: function(e, el, code){
                    el.css('text-align', 'center');
                    if(gdpData[code] != undefined) el.html('<b>'+el.html()+'</b>'+'<br/>Sujets : '+gdpData[code]+'');
            },
                onRegionClick: function(e, code) {
                    var map = $('#world-map').vectorMap('get', 'mapObject');
                    if(gdpData[code] != undefined) {
                        $('.jvectormap-tip').remove();
                        window.location.href = "#/posts?search="+camelize(map.getRegionName(code));
                    }
                },
            backgroundColor: "#ccccee"
        });

    });

}]);