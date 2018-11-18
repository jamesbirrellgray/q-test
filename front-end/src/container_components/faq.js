import React, {Component} from 'react';

class Faq extends Component {

  faqBaker(props){
    let faqs = [], postNumber = 1
    for(let post of props.posts){
      faqs.push(
          <div key={post.title}>
              <h2>{post.title}</h2>
          </div>
        )
      postNumber++
    }

    return ( <div> {faqs} </div> )

  }

  render() {

    return (
      <this.faqBaker posts={this.props.posts} totalapps={this.props.totalPosts}/>
    );
  }

}

export default Faq;
