const express = require('express')
const app = express()

// //设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/api/goods', function (req, res) {
  res.json({
    title: '正式环境',
    list: [
      { text: '百万年薪架构师', price: 100 },
      { text: 'web全栈架构师', price: 8000 },
      { text: 'Python爬虫', price: 60 }
    ]
  })
})

const server = app.listen(9082, function () {
  console.log('Express app server listening on port %d', server.address().port)
})
