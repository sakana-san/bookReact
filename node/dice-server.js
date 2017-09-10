//request = get
//response = post

const http = require('http')
const contentType = { 'Content-Type': 'text/html;charset=utf-8' }
const server = http.createServer(handle)
server.listen(8081)

function handle(request, response) {
  const url = request.url
  if (url == '/' || url == './index.html') {
    showIndexPage(request, response)
    return
  }
  if (url.substr(0, 6) === '/dice/') {
    showDicePage(request, response)
    return
  }
  response.writeHead(404, contentType)
  response.end('404 not found')
}

function showIndexPage (request, response) {
  response.writeHead(200, contentType)
  const html = '<p>サイコロページの内容</p>' +
    '<p><a href="/dice/6">6面サイコロ</a></p>' +
    '<p><a href="/dice/12">12面サイコロ</a></p>'
  response.end(html)
}

function showDicePage (request, response) {
  response.writeHead(200, contentType)
  const a = request.url.split('/')
  const num = parseInt(a[2])
  // 1〜12のランダム
  const random = Math.floor(Math.random() * num) + 1
  response.end('<p style="font-size: 72px;">' + random + '</p>')
}
