import app from "./src/server"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info('Running a GraphQL API server at localhost:'+PORT+'/graphql')
})