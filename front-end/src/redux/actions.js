export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`assets/data.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

function shouldFetchPosts(state) {
  const posts = state.posts
  if (posts.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts())
    }
  }
}