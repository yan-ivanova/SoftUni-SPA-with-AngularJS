'use strict';

//app.factory('postsData', ['$resource', 'baseServiceUrl', 'authService',
//    function ($resource, baseServiceUrl, authService) {
//        function getNewsFeed(startPostId, pageSize, success, error) {
//            return $resource(
//            baseUrl + '/api/me/feed?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
//            null,
//            {
//                'get': {
//                    method: 'GET',
//                    isArray: true,
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .get();
//        }

//        function getUserWall(username, startPostId, pageSize) {
//            return $resource(
//            baseUrl + '/api/users/' + username + '/wall?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
//            null,
//            {
//                'get': {
//                    method: 'GET',
//                    isArray: true,
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .get();
//        }

//        function addPost(post) {
//            return $resource(
//            baseUrl + '/api/posts',
//            null,
//            {
//                'save': {
//                    method: 'POST',
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .save(post);
//        }

//        function editPost(postId, postContent) {
//            return $resource(
//            baseUrl + '/api/posts/' + postId,
//            null,
//            {
//                'update': {
//                    method: 'PUT',
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .update(postContent);
//        }

//        function deletePost(postId) {
//            return $resource(
//            baseUrl + '/api/posts/' + postId,
//            null,
//            {
//                'delete': {
//                    method: 'DELETE',
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .delete();
//        }

//        function getPostComments(postId) {
//            return $resource(
//            baseUrl + '/api/posts/' + postId + '/comments',
//            null,
//            {
//                'get': {
//                    method: 'GET',
//                    isArray: true,
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .get();
//        }

//        function likePost(postId) {
//            return $resource(
//            baseUrl + '/api/posts/' + postId + '/likes',
//            null,
//            {
//                'save': {
//                    method: 'POST',
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .save();
//        }

//        function unlikePost(postId) {
//            return $resource(
//            baseUrl + 'api/posts/' + postId + '/likes',
//            null,
//            {
//                'delete': {
//                    method: 'DELETE',
//                    headers: authService.getAuthHeaders()
//                }
//            })
//            .delete();
//        }

//        return {
//            getNewsFeed: getNewsFeed,
//            getUserWall: getUserWall,
//            addPost: addPost,
//            editPost: editPost,
//            deletePost: deletePost,
//            getPostComments: getPostComments,
//            likePost: likePost,
//            unlikePost: unlikePost
//        }
//    }]);
///////

app.factory('postsData', ['$resource', 'baseServiceUrl', 'authService',
    function ($resource, baseServiceUrl, authService) {
        function getNewsFeed(startPostId, pageSize) {
            return $resource(
            baseUrl + '/api/me/feed?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: authService.getAuthHeaders()
                }
            })
            .get();
        }

        function getUserWall(username, startPostId, pageSize) {
            return $resource(
            baseUrl + '/api/users/' + username + '/wall?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: authService.getAuthHeaders()
                }
            })
            .get();
        }

        function addPost(post) {
            return $resource(
            baseUrl + '/api/posts',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: authService.getAuthHeaders()
                }
            })
            .save(post);
        }

        function editPost(postId, postContent) {
            return $resource(
            baseUrl + '/api/posts/' + postId,
            null,
            {
                'update': {
                    method: 'PUT',
                    headers: authService.getAuthHeaders()
                }
            })
            .update(postContent);
        }

        function deletePost(postId) {
            return $resource(
            baseUrl + '/api/posts/' + postId,
            null,
            {
                'delete': {
                    method: 'DELETE',
                    headers: authService.getAuthHeaders()
                }
            })
            .delete();
        }

        function getPostComments(postId) {
            return $resource(
            baseUrl + '/api/posts/' + postId + '/comments',
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: authService.getAuthHeaders()
                }
            })
            .get();
        }

        function likePost(postId) {
            return $resource(
            baseUrl + '/api/posts/' + postId + '/likes',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: authService.getAuthHeaders()
                }
            })
            .save();
        }

        function unlikePost(postId) {
            return $resource(
            baseUrl + 'api/posts/' + postId + '/likes',
            null,
            {
                'delete': {
                    method: 'DELETE',
                    headers: authService.getAuthHeaders()
                }
            })
            .delete();
        }

        return {
            getNewsFeed: function (params, success, error) {
                return getNewsFeed.get(params, success, error);
            },
            getUserWall: function (params, success, error) {
                return getUserWall.get(params, success, error);
            },
            addPost: function (post, success, error) {
                return addPost.save(post, success, error);
            },
            editPost: function (postContent, success, error) {
                return editPost.update(postContent, success, error);
            },
            deletePost: function (params, success, error) {
                return deletePost.delete(params, success, error);
            },
            getPostComments: function (params, success, error) {
                return getPostComments.get(params, success, error);
            },
            likePost: function (params, success, error) {
                return likePost.save(params, success, error);
            },
            unlikePost: function (params, success, error) {
                return unlikePost.delete(params, success, error);
            }
        }
    }]);