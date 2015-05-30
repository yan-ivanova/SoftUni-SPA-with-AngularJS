'use strict';

app.controller('HomeController',
    function ($scope, $location, userService, notifyService) {
        $scope.getMyData = function () {
            userService.getUserData(
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };

        $scope.getUserData.user = function (username) {
            userService.getUserPreviewData(username,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };

        $scope.getUserFullData.user = function (username) {
            userService.getUserFullData(username,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };

        $scope.search.user = function (name) {
            userService.searchUsersByName(name,
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