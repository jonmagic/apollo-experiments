import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
  const { default: data } = await import('./other')

  ctx.body = `Hello World ${Math.random() > 0.5 ? data.a : data.b}`
})

app.listen(3000)
