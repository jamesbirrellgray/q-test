import { getPosts, updatePosts } from  "../data/services/CmsPosts";

/* Faqs Services ++++++++++++++++++++++++++++ */

/* Service helpers */

/* Gets faqs from CmsPosts respose object and adds Id's to the Faqs array */
const getFaqsFromPosts = function(posts) {
  const faqs = posts.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body }));
  posts.faqs = faqs;
  return faqs;
}

/* Strips the ID's from the faqs array and returns an updated posts object */
const updateFaqsToPosts = function(posts, faqs) {
  posts.faqs = faqs.map((f, i) => ({ title: f.title, body: f.body }));
  return posts;
}
/* Update the faqs object to the posts object and API */
const updateFaqs = function(faqs) {
  return  getPosts()
    .then(posts => {
      return updateFaqsToPosts(posts, faqs);
    })
    .then(posts => {
      return updatePosts(posts);
    })
    .then(posts => {
      return getFaqsFromPosts(posts);
    });
}


/* Services  */

/* Returns an array of all faqs */
export function getFaqs() {
  return getPosts()
    .then(posts => getFaqsFromPosts(posts));
}


/* Get a single Faq */
export function getFaq(id) {
  return getFaqs().then(faqs => faqs[faqs.findIndex(f => f.id == id)]);
}

/* Update a single Faq */
export function updateFaq(args) {
  const faq = {
    id: args.id,
    title: args.title,
    body: args.body,
  }
  return getFaqs()
  .then(faqs => {    
    faqs[faqs.findIndex(f => f.id == faq.id)] = faq;
    return faqs;
  })
  .then(faqs => {
    return updateFaqs(faqs);
  })
  .then(faqs => {
    return faqs[faqs.findIndex(f => f.id == faq.id)];
  });
}

/* Delete a single Faq and return the new faqs object? */
export function deleteFaq(id) {
  const faqs = getFaqs();
  delete faqs[faqs.findIndex(f => f.id == id)];
  return updateFaqs(faqs);
}