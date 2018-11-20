export const Query = {
  FaqsPage: (obj, args, context, info) => {
    const { CmsPosts } = context.services
    return CmsPosts.getPosts()
    // Add id's to make working with Faq's easier
    .then(posts => posts.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body })))
  }
}
export const Mutation ={
  UpdateFaq: (obj, args, context, info) => {
    const faq = {
      id: args.id,
      title: args.title,
      body: args.body,
    }
    const { CmsPosts } = context.services
    return CmsPosts.getPosts()
      // Update the posts object with ID's
      .then(posts => {
        let faqs = posts.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body }))
        posts.faqs = faqs
        return posts
      })
      // Update the correct Faq
      .then(posts => {
        posts.faqs[posts.faqs.findIndex(f => f.id == faq.id)] = faq 
        return posts
      })
      // Remove the id's to send back to posts API
      .then(posts => {
        let faqs = posts.faqs.map((f, i) => ({ title: f.title, body: f.body }))
        posts.faqs = faqs
        return posts
      })
        // Update the posts API with the sam eexpected data scruture
      .then(posts => {
        return CmsPosts.updatePosts(posts)
      })
      // Add the ID's back
      .then(posts => {
        let faqs = posts.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body }))
        posts.faqs = faqs
        return posts
      })
      // Return the updated faq
      .then(posts => {
        return posts.faqs[posts.faqs.findIndex(f => f.id == faq.id)]
      })
  }
}
