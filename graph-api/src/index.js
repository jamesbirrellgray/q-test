import app from "./app"

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.info('Running a GraphQL API server at localhost:'+PORT+'/graphql')
})