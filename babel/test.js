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