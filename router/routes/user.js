const KoaRouter = require('koa-router')
const router = new KoaRouter()


// login
router.post('/login', async ctx => {
  ctx.body = `login api`
})

// register
router.post('/register', async ctx => {
  ctx.body = `register api`
})

// logout
router.get('/logout', async ctx => {
  ctx.body = `logout`
})

module.exports = router