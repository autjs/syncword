const KoaRouter = require('koa-router')
const router = new KoaRouter()

const uEmail = require('../../utils/email')
const numRandom = require('number-random')

// login

router.get('/email/code', async ctx => {
  // 取到email
  
  const email = ctx.query.email
  // 
  if (email) {
    uEmail.send(email, numRandom(100000, 999999))
    ctx.body = `已发送`
  } else {
    ctx.body = `email 不存在`
  }
})

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
  ctx.body = ctx.request.body
})

// logout
router.get('/logout', async ctx => {
  ctx.body = `logout`
})

module.exports = router