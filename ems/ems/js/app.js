﻿/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

    Modulo: 
        AutomationUpload
    Controladores:
        userCtrl: se utiliza en inicio.html
                ->NCCtrl: hereda de userCtrl
                ->NCVCtrl: hereda de userCtrl
        loginCtrl: se utiliza en el login.html
        adminCtrl: admin.html
        adminModelCtrl: admin_modelos.html


*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





var app = angular.module("ems", ['ngRoute', 'ngMessages']);
app.config(
	function ($routeProvider) {
	    $routeProvider.
		when('/', {
		    templateUrl: 'views/turista.html',
		    controller: "turista"
		}).
	    when('/granjero', {
	        templateUrl: 'views/admin_modelos.html',
	        controller: "adminModelCtrl"
	    })
     .otherwise({
         redirectTo: '/'
     });
	})
