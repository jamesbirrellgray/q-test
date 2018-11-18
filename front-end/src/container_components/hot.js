import React, {Component} from 'react'
import { hot, setConfig } from 'react-hot-loader'
import Faq from './faq'

class Hot extends Component {
  <Faq posts={posts} totalPosts={totalPosts} />
}

setConfig({ logLevel: 'debug' })

export default hot(module)(Hot)