import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import serialize from 'serialize-javascript'
import App from 'components/pages/App'
import getPageTitle from 'selectors/getPageTitle'
import configureStore from './configureStore'

export default ({ clientStats }) => async (req, res/* , next */) => {
  const store = await configureStore(req, res)
  if (!store) return // no store means redirect was already served

  const app = createApp(App, store)
  const appString = ReactDOM.renderToString(app)
  const chunkNames = flushChunkNames()
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames })

  process.stdout.write(`REQUESTED PATH: ${req.path}\n`)
  process.stdout.write(`CHUNK NAMES: ${chunkNames}\n`)


  const html = (
    `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>${getPageTitle(store.getState())}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styles}
      </head>
      <body>
        <script>window.REDUX_STATE = ${serialize(store.getState())}</script>
        <div id="root">${appString}</div>
        <div id="modal-root"></div>
        ${cssHash}
        <script type='text/javascript' src='/static/vendor.js'></script>
        ${js}
      </body>
    </html>`
  )


  res.send(html)
}

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
)
