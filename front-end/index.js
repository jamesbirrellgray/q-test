import graphApi from "./src/server/server"

const PORT = process.env.PORT || 4000

graphApi.listen(PORT, () => {
  console.info('Running a GraphQL API server at localhost:'+PORT+'/graphql')
})