'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            changeUser: function (userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    data: userData,
                    headers: authService.getAuthHeaders()                    
                };
                $http(request).success(success).error(error);
            },

            changePassword: function (passwordData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/changepassword',
                    data: passwordData,
                    headers: authService.getAuthHeaders()                    
                };
                $http(request).success(success).error(error);
            },

            searchUsersByName: function (searchTerm) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search?searchTerm=' + searchTerm,
                    headers: authService.getAuthHeaders()
                    //isArray: true,
                };
                $http(request);//.success(success).error(error);
            },

            getUserData: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders(),
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
