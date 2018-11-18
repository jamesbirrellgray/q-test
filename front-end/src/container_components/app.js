import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../redux/actions'

import Faq from './faq'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPostsIfNeeded())
  }

  render() {
    const { isFetching, posts } = this.props
    let totalPosts = posts.length;

    return (
       <div>
         {isFetching && posts.length === 0 && <h2>Loading...</h2>}
         {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
         <Faq posts={posts} totalPosts={totalPosts} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, posts } = state
 
  return {
    isFetching,
    posts
  }
}
export default connect(mapStateToProps)(App)
