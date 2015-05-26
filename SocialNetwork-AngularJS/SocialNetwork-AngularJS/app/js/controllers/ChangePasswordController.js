'use strict';

app.controller('ChangePasswordController',
    function ($scope, $rootScope, $location, userService, notifyService) {

        $scope.changePassword = function (passData) {
            userService.changePassword(passData,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };
    }
);