"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
exports.RECEIVE_POSTS = exports.REQUEST_POSTS = void 0;
var REQUEST_POSTS = 'REQUEST_POSTS';
exports.REQUEST_POSTS = REQUEST_POSTS;
var RECEIVE_POSTS = 'RECEIVE_POSTS';
exports.RECEIVE_POSTS = RECEIVE_POSTS;

function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json
  };
}

function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch("assets/data.json").then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receivePosts(json));
    });
  };
}

function shouldFetchPosts(state) {
  var posts = state.posts;

  if (posts.length == 0) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
}

function fetchPostsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  };
}