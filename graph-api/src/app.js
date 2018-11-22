import express from "express"
import graphql from "express-graphql"
import Context from "./context"
import schema from './schema'

export default express()
  .set("trust proxy", true)
  .get("/", (req, res) => res.redirect("/graphql"))
  .use(
    "/graphql",
    graphql((req, res) => {
      const cache = undefined
      const context = new Context({ cache, req })
      return {
        context,
        graphiql: true,
        pretty: true,
        schema: schema,
      }
    })
  )