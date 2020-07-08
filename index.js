const app = require('./koa')
const conf = require('./config')

const router = require('./router')

app.use(ctx => {
  ctx.body = 'hello Syncword'
})

app.listen(conf.server.PORT, () => {
  console.log(`Server run at http://localhost:${conf.server.PORT}`)
})