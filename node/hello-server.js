//httpモジュールを読み込む
const http = require('http')

//webサーバーを実行
const server = http.createServer(handler) //サーバーを生成
server.listen(8081) //ポート8081番で待ち受け開始


//サーバーにアクセスがあった時の処理
function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)

  // HTTPヘッダーを出力
  res.writeHead(200, {'Content-type': 'text/html'})

  // レスポンスの本体を出力
  res.end('<h1>hello world</h1>\n')
}