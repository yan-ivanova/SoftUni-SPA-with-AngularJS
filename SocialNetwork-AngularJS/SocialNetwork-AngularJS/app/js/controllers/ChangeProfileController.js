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


        //

        $scope.uploadImage = function (event) {
            var previewElement,
            inputElement,
            file,
            reader,
            sizeLimit;

            switch (event.target.id) {
                case 'profile-image':
                    previewElement = $('.picture-preview');
                    inputElement = $('#profile-image');
                    sizeLimit = 131072;
                    break;
                case 'cover-image':
                    previewElement = $('.cover-preview');
                    inputElement = $('#cover-image');
                    sizeLimit = 1048576;
                    break;
            }

            file = event.target.files[0];

            if (file && !file.type.match(/image\/.*/)) {
                notifyService.showError("Invalid file format.");
            } else if (file && file.size > sizeLimit) {
                notifyService.showError("File size limit exceeded.");
            } else if (file) {
                reader = new FileReader();
                reader.onload = function () {
                    previewElement.attr('ng-src', reader.result);
                    inputElement.attr('data-picture-data', reader.result);
                    if (event.target.id === 'profile-image') {
                        $scope.userData.profileImageData = reader.result;
                    } else {
                        $scope.userData.coverImageData = reader.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        };

        $scope.clickUpload = function (element) {
            angular.element(element).trigger('click');
        };


        function convertProfileImg() {
            $scope.userData.profileImageData = $base64.encode($scope.profileImg[0].base64);
           //$scope.userData.profileImageData = 'data:image/jpg;base64,' + $scope.userData.profileImageData.base64;
        }
        function convertCoverImg() {
            $scope.userData.coverImageData = 'data:image/jpg;base64,' + $scope.userData.coverImageData.base64;
        }
        //ng-change="convertProfileImg()"
    }
]);