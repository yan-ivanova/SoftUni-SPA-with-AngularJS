'use strict';

app.factory('userFriendsService', ['$resource', 'baseServiceUrl', 'authService',
    function ($resource, baseServiceUrl, authService) {
        return {
            getUserFriendsPreview: function (params, success, error) {
                var friendsPreview = $resource(
                    baseServiceUrl + '/api/me/friends/preview',
                    null,
                    {
                        'getFriendsPreview': {
                            method: 'GET',
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return friendsPreview.getFriendsPreview(params, success, error);
            },

            getUserFriends: function (params, success, error) {
                var friends = $resource(
                    baseServiceUrl + '/api/me/friends',
                    null,
                    {
                        'getFriends': {
                            method: 'GET',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return friends.getFriends(params, success, error);
            },

            getOtherUserFriendsPreview: function (username, success, error) {
                var friendsPreview = $resource(
                    baseServiceUrl + '/api/users/' + username + '/friends/preview',
                    null,
                    {
                        'getOtherFriendsPreview': {
                            method: 'GET',
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return friendsPreview.getOtherFriendsPreview(username, success, error);
            },

            getOtherUserFriends: function (username, success, error) {
                var friends = $resource(
                    baseServiceUrl + '/api/users/' + username + '/friends',
                    null,
                    {
                        'getOtherFriends': {
                            method: 'GET',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return friends.getOtherFriends(username, success, error);
            },

            getFriendRequests: function (username, success, error) {
                var friendRequests = $resource(
                    baseServiceUrl + '/api/me/requests',
                    null,
                    {
                        'getRequests': {
                            method: 'GET',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return friendRequests.getRequests(username, success, error);
            },

            sendFriendRequest: function (name, success, error) {
                var friendRequest = $resource(
                    baseServiceUrl + '/api/me/requests/' + name,
                    null,
                    {
                        'sendRequests': {
                            method: 'POST',
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return friendRequest.sendRequests(name, success, error);
            },

            approveFriendRequest: function (requestId, success, error) {
                var approveRequests = $resource(
                    baseServiceUrl + '/api/requests/' + requestId + '?status=approved',
                    null,
                    {
                        'approve': {
                            method: 'PUT',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return approveRequests.approve(requestId, success, error);
            },

            rejectFriendRequest: function (requestId, success, error) {
                var rejectRequest = $resource(
                    baseServiceUrl + '/api/requests/' + requestId + '?status=rejected',
                    null,
                    {
                        'reject': {
                            method: 'PUT',
                            headers: authService.getAuthHeaders()
                        }  
                    }
                );

                return rejectRequest.reject(requestId, success, error);
            }
        }
    }]);