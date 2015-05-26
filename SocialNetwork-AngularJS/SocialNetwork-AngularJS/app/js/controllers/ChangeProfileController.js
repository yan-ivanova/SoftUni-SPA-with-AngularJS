'use strict';

app.controller('ChangeProfileController',
    function ($scope, $rootScope, $location, userService, notifyService) {
        $scope.getUserProfile = function () {
            userService.getUserData(
                function success(data) {
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user data", err);
                }
            );
        };

        $scope.getUserProfile();

        $scope.updateProfile = function (userData) {
            userService.editUser(userData,
                function success() {
                    notifyService.showInfo("User edited successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User edit failed", err);
                }
            );
        };
    }
);