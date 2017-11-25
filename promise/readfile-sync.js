const fs = require('fs')

// function readFile_pr (fname) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fname, 'utf-8', (err, data) => {
//       resolve(data)
//     })
//   })
// }
//
// readFile_pr('A.txt')
//   .then((text) => {
//     console.log('aを読み込みました', text)
//     return readFile_pr('B.txt')
//   })
//   .then((text) => {
//     console.log('bを読み込みました', text)
//     return readFile_pr('c.txt')
//   })
//   .then((text) => {
//     console.log('cを読み込みました', text)
//   })

function Toin (name) {
  return new Promise((resolve, reject) => {
    let str = name
    resolve(str)
    if (!str) {
      reject('error')
    }
  })
}

// Toin ('根尾選手')
//   .then((str) => {
//     console.log('でるか', str)
//     return Toin('藤原選手')
//   })
//   .then((str) => {
//     console.log('でるか2', str)
//   })

async function readAll() {
  const a = await Toin ('根尾選手')
    console.log(a)
}

readAll()
// function readeFile_pr(fname) {
//   return new Promise((resolve) => {
//     fs.readFile(fname, 'utf-8', (err, s) => {
//       resolve(s)
//     })
//   })
// }
//
// readeFile_pr('A.txt')
// .then((text) => {
//   console.log('A', text)
//   return readeFile_pr('B.txt')
// })
// .then((text) =>{
//   console.log('B', text)
//   return readeFile_pr('C.txt')
// })
// .then((text) =>{
//   console.log('C', text)
//   return readeFile_pr('D.txt')
// })
// .then((text) =>{
//   console.log('C', text)
// })

// function readFileEx (fname) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fname, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve(data)
//     })
//   })
// }
//
// async function readALl () {
//   const a = await readFileEx('A.txt')
//   console.log(a)
//   const b = await readFileEx('B.txt')
//   console.log(b)
//   const c = await readFileEx('C.txt')
//   console.log(c)
//   const D = await readFileEx('D.txt')
//   console.log(D)
// }
//
// readALl()

//
// function OsakaToin () {
//   return new Promise(function (resolve, reject)  {
//     setTimeout(function () {
//       resolve('大阪桐蔭最強世代は2017年代')
//       reject(new Error('error'))
//     }, 100)
//   })
// }
//
// OsakaToin()
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

// Promise.resolve()
// .then(function () {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log('大阪桐蔭 4番')
//       resolve('大阪桐蔭 根尾昴')
//     }, 5000)
//   })
// })
// .then(function (value) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log('value1', value)
//       console.log('大阪桐蔭 1番')
//       resolve('藤原')
//     }, 100)
//   })
// })
// .then(function (value) {
//   console.log('結果')
//   console.log('value2',value)
// })
// .catch(function (error) {
//   console.log(error)
// })

// let result1 = 1 + 2
// let result2 = result1 + 100
// let doSomething1 = function () {
//   result2
// }
//
// let doSomething2 = function () {
//   console.log(result2)
// }
//
// let doSomething3 = function () {
//   console.log(result2)
// }
//
// doSomething1()
// doSomething2()
// doSomething3()