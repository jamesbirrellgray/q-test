import {
  Query as FaqsPage,
  Mutation as UpdateFaq,
} from "./faqsPage/resolvers";

import {
   Query as HomePage,
} from "./homePage/resolvers"

export default {
    Query: {
        ...FaqsPage,
        ...HomePage,
    },
    Mutation: {
        ...UpdateFaq,
    },
};