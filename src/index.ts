require('dotenv').config()

import Koa from 'koa'
import ping from './Routes/ping'

const app = new Koa()

app.use(ping.routes())
app.use(ping.allowedMethods())

app.use(async ctx => {
  const { default: data } = await import('./other')

  ctx.body = `Hello World ${Math.random() > 0.5 ? data.a : data.b} - NODE_ENV: ${process.env.NODE_ENV}`
})

app.listen(3000)
