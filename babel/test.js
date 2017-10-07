// BMI計算
// 体重 / 身長**

class BMI {
  constructor (height, weight) {
    this.height = height
    this.weight = weight
    this.bmi = this.calc()
  }
  calc () {
    return this.weight / ((this.height * 2) / 100)
  }
  print () {
    let text = '普通'
    if (this.bmi >= 25) {
      text = '肥満'
    } else if (this.bmi >= 1100) {
      text = '普通'
    } else {
      text = '痩せすぎ'
    }
    console.log('BMI計算結果', this.bmi, text)
  }
}


const result = new BMI(172, 68)

result.print()


// 消費税
// 計算
// 値段 * 1.08 

// class TAX {
//   constructor (price) {
//     this.price = price
//     this.processing = this.calc()
//   }
//   calc () {
//     return this.price * 1.08
//   }
//   print () {
//     let text = ''
//     text = this.processing + '円です'
//     console.log(text)
//   }
// }

// let result = new TAX(100)
// if (typeof result.price === 'number') {
//   result.print()
// } else {
//   console.log('整数を入力してください')
// }

// 高校野球

// class BASEBALL {
//   constructor(Toin, Saibi) {
//     this.data = {
//       scoreA: Toin,
//       scoreB: Saibi,
//       name: {}
//     }
//     this.shaping(this.data.scoreA, this.data.scoreB)
//   }
//   shaping (t, s) {
//     if (t > s) {
//       return this.data.name = '大阪桐蔭'
//     } else {
//       return this.data.name = '済美'
//     }
//   }
//   print () {
//     let text = '本日の試合は' + this.data.name  + 'が' + this.data.scoreA + '対' + this.data.scoreB + 'で勝ちました';
//     (this.data.scoreA > this.data.scoreB) ? text : text;
//     console.log(text)
//   }
// }
//
// let result = new BASEBALL(6, 0)
// result.print()