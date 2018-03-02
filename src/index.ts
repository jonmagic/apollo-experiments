require('dotenv').config()

import Koa from 'koa'
import proxy from 'koa-proxy'
import ping from './Routes/ping'

const app = new Koa()

app.use(ping.routes())
app.use(ping.allowedMethods())

if (process.env.NODE_ENV === 'development') {
  app.use(proxy({
    host: 'http://localhost:3001'
  }))
} else {
  app.use(async ctx => {
    ctx.body = 'serving production'
  })
}

app.listen(3000)
