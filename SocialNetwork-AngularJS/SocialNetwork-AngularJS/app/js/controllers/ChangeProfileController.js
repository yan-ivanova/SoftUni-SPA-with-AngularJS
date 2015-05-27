'use strict';

app.controller('ChangeProfileController', ['$scope', '$rootScope', '$location', 'userService', 'notifyService', 'Upload',
    function ($scope, $rootScope, $location, userService, notifyService, Upload) {
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

        $scope.changeUser = function (userData) {
            userService.changeUser(userData,
                function success() {
                    notifyService.showInfo("User edited successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User edit failed", err);
                }
            );
        };

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    Upload.upload({
                        url: 'upload/url',
                        fields: {'username': $scope.username},
                        file: file
                    }).success(function (data, status, headers, config) {
                    });                }
            }
        };


    }
]);