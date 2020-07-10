const KoaRouter = require('koa-router')
const router = new KoaRouter()


// login

router.get('/login', async ctx => {
  await ctx.render('login')
})

router.post('/login', async ctx => {
  ctx.body = `login api`
})

// register

router.get('/register', async ctx => {
  // 把 register.html 渲染出来..
  await ctx.render('register', {
    name: '注册页面'
  })
})

router.post('/register', async ctx => {
  ctx.body = `register api`
})

// logout
router.get('/logout', async ctx => {
  ctx.body = `logout`
})

module.exports = router