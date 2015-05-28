'use strict';

app.controller('ChangePasswordController',
    function ($scope, $location, userService, notifyService) {
        $scope.changePassword = function (passwordData) {
            userService.changePassword(passwordData,
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