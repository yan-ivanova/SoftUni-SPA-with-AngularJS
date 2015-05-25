'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            editUser: function (user, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders(),
                    user: user
                };
                $http(request).success(success).error(error);
            },

            changePassword: function (password, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/changepassword',
                    headers: authService.getAuthHeaders(),
                    password: password
                };
                $http(request).success(success).error(error);
            },

            searchUsersByName: function (name, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search?searchTerm=' + name,
                    headers: authService.getAuthHeaders()
                    //isArray: true,
                };
                $http(request).success(success).error(error);
            },

            getLoggedUserData: function (userData, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders(),
                    userData: userData
                };
                $http(request).success(success).error(error);
            },

            getUserFullData: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getUserPreviewData: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username + '/preview',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
