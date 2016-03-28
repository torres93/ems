var app = angular.module("ems");

app.controller('turista', function ($scope, $http) {
    var i = JSON.stringify({ tipo_dato: 1 });
    var v = JSON.stringify({ tipo_dato: 2 });
    $http.post("turista.asmx/MostrarDatos", i).success(function ($response) {
        //console.log($response.d);
        var aux = 0;
        var aux2 = 0;
        var data = JSON.parse($response.d);
        for (key in data[0]) {
            if (data[0][key] != '') {
                if (data[0][key] == data[0]["anioAct"]) {
                    aux2 = aux;
                } else {
                 aux = aux + 1;
                }
               
            } else { }
        }
        $scope.cols = aux2 - 2;
        for (var i = 0; i < 2; i++) {
            for (var x = 0; x < data[i].length; x++) {
                console.log(data[i][x]);
            }
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i]['anio'] != '' && data[i]['anioAct'] != '') {
                data[i]['anio'] = '';
                data[i]['anioAct'] = '';
            } else {

            }
        }
        $scope.indice = data;
        $http.post("turista.asmx/MostrarDatos", v).success(function ($response) {
            var aux = 0;
            var aux2 = 0;
            var aux3 = 0;
            dat = [];
            datos = [];
            $scope.meses = [];
            var data = JSON.parse($response.d);
            $scope.anio = data[0]['anio'];
            $scope.anioAct = data[0]['anioAct'];
            for (key in data[0]) {
                aux3 = aux3 + 1;
                if (aux3 == 3) {
                     dat.push({ "nombre": key, "val": data[0][key] });
                }
               
                
                if (data[0][key] != '') {
                    if (aux3 > 2) $scope.meses.push(key);
                   
                    if (data[0][key] == data[0]["anioAct"]) {
                        aux2 = aux;
                    } else {
                        aux = aux + 1;
                    }

                } else { }
            }
           
            $scope.cols = aux2 - 2;
            $scope.meses[$scope.meses.length - 2] = $scope.meses[0];
            $scope.meses[$scope.meses.length-1] = "";
            for (var i = 0; i < 2; i++) {
                for (var x = 0; x < data[i].length; x++) {
                    console.log(data[i][x]);
                }
            }
            for (var i = 0; i < data.length; i++) {
               
                datos.push({ "label": data[i]["descripcion"], "value": data[i][dat[0].nombre + "Act"] });
               
                if (data[i]['anio'] != '' && data[i]['anioAct'] != '') {
                    data[i]['anio'] = '';
                    data[i]['anioAct'] = '';
                } else {

                }
            }
            $scope.variacion = data;
           
            FusionCharts.ready(function () {
                var gr1 = new FusionCharts({
                    "type": "column2d",
                    "renderAt": "chartContainer",
                    "width": "600px",
                    "height": "380px",
                    "dataFormat": "json",
                    "dataSource":
                        {
                            "chart": {
                                "caption": "Variación anual",
                                "subcaption": $scope.meses[0] + " "+$scope.anioAct,
                                "yaxisname": "",
                                "numberprefix": "",
                                "bgcolor": "FFFFFF",
                                "useroundedges": "1",
                                "showborder": "0",
                                "formatNumberScale": "0"
                            },
                            "data": datos
                        }
                });
                gr1.render("graph1");
            })
        });
    });
});

app.controller('granjero', function ($scope, $http) {

    $http.post('turista.asmx/variable').success(function ($response) {
        $scope.variables = $response;
        $scope.vari = $response[0];
        var i = JSON.stringify({ variable: $response[0].id_variable });
        $http.post('turista.asmx/sector', i).success(function ($response) {
            $scope.sectores = JSON.parse($response.d);
            $scope.sec = JSON.parse($response.d)[0];
            var i = JSON.stringify({ actividad: JSON.parse($response.d)[0].id_variable });
            $http.post('turista.asmx/actividad', i).success(function ($response) {
                $scope.actividades = JSON.parse($response.d);
                $scope.act = JSON.parse($response.d)[0];
            });
        });

    });
   
    $scope.getSectores = function (vari) {
        var i = JSON.stringify({ variable: vari.id_variable });
        $http.post('turista.asmx/sector',i).success(function ($response) {
            $scope.sectores = JSON.parse($response.d);
            $scope.sec = JSON.parse($response.d)[0];
        });
    }
    $scope.getActividad = function (sec) {
        var i = JSON.stringify({ actividad: sec.id_variable });
        $http.post('turista.asmx/actividad', i).success(function ($response) {
            $scope.actividades = JSON.parse($response.d);
            $scope.act = JSON.parse($response.d)[0];
        });
    }
})