import { RESTDataSource } from "apollo-datasource-rest"

// A simple service to update the back end posts API
export default class CmsPosts extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "http://localhost:4000/api/v1/"
  }
  async getPosts() {
    const posts = await this.get("posts")
    return posts
  }
  async updatePosts(posts) {
    return this.post("posts", posts)
  }
}