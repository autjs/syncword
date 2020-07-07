const Koa = require('koa')
const app = new Koa()

const conf = require('./config')

app.use(ctx => {
  ctx.body = 'hello Syncword'
})

app.listen(conf.server.PORT, () => {
  console.log(`Server run at http://localhost:${conf.server.PORT}`)
})