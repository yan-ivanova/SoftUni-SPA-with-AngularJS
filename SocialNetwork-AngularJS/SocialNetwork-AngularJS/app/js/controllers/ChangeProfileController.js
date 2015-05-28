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
                    console.log(userData);
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User edit failed", err);
                }
            );
        };

        $scope.$watch('coverImg', function () {
            $scope.upload($scope.coverImg);
        });

        $scope.upload = function (coverImg) {
            if (coverImg && coverImg.length) {
                for (var i = 0; i < coverImg.length; i++) {
                    var file = coverImg[i];
                    Upload.upload({
                        url: 'upload/url',
                        fields: {'username': $scope.username},
                        file: file
                    }).success(function (data, status, headers, config) {
                    });                }
            }
        };

        $scope.$watch('profileImg', function () {
            $scope.upload($scope.profileImg);
        });

        $scope.upload = function (profileImg) {
            if (profileImg && profileImg.length) {
                for (var i = 0; i < profileImg.length; i++) {
                    var file = profileImg[i];
                    Upload.upload({
                        url: 'upload/url',
                        fields: { 'username': $scope.username },
                        file: file
                    }).success(function (data, status, headers, config) {
                    });
                }
            }
        };

        //function convertProfileImg() {
        //    $scope.userData.profileImageData = 'data:image/jpg;base64,' + $scope.userData.profileImageData.base64;
        //}
        //function convertCoverImg() {
        //    $scope.userData.coverImageData = 'data:image/jpg;base64,' + $scope.userData.coverImageData.base64;
        //}
        //ng-change="convertProfileImg()"
    }
]);