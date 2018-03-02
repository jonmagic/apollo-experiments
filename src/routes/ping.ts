import Router from 'koa-router'

const router = new Router()

router.get('/_ping', async ctx => {
  ctx.body = { now: Math.round((new Date()).getTime() / 1000), status: 'ok' }
})

export default router
