'use strict';

app.controller('LoginController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful"); // console.log('da'); //
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Login failed", err); //console.log('ne'); //
                }
            );
        };
    }
);
