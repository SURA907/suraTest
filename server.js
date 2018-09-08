const http = require('http')

// 打印输出hello,world
console.log('hello,world')

const server = http.createServer((req, res)=>{
    res.end('hello, world')
})

server.listen(8080)