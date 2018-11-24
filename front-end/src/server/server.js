import express from "express"
import graphql from "express-graphql"
import { schema } from '../data/schema'

export default express()
  .set("trust proxy", true)
  .get("/", (req, res) => res.redirect("/graphql"))
  .use(
    "/graphql",
    graphql((req, res) => {
      return {
        graphiql: true,
        pretty: true,
        schema: schema,
      }
    })
  )