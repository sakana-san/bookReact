const fs = require('fs')

// 同期処理
// const data = fs.readFileSync('./note/text.txt', 'utf-8')
// console.log(data)

// 非同期処理
// fs.readFile('./note/text.txt', 'utf-8', function (err, data) {
//   console.log(data)
// })

// 無名関数引数
// const manga =  'doragonball is  Akira Toriyama work'
// // /[a-z]+/g aからzで、一致するもの、すべてを検索
// const display = manga.replace(/[a-z]+/g,function (m) {
//   return m.toUpperCase()
// })
// console.log(display)
//
// const sum = [100, 45, 23, 17, 8, 96, 62]
// sum.sort(function (a, b) {
//   return
// })
// console.log(sum)


// Promise

function readFile (fname) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}
async function readAll () {
  const a = await readFile('text1.text')
  console.log(a)
  const b = await readFile('text2.text')
  console.log(b)
  const c = await readFile('text3.text')
  console.log(c)
}

readAll()

