export default {
  Query: {
    HomePage: (obj, args, context, info) => {
      const { CmsPosts } = context.services
      return CmsPosts.getPosts()
      .then(posts => posts.homepage);
    },
  }
}