import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config'
const compiler = webpack(config)

import app from "./app"

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.info("Running a GraphQL API server at localhost:${PORT}/graphql")
})