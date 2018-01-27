import React from 'react'
import FormInput from './FormInput'
import ButtonList from './ButtonList'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      colors: ['red', 'blue', 'orange', 'yellow', 'skyblue'],
      addColors: '',
      deleteColors: '',
      flag: false
    }
  }
  handler (e) {
    // ----------------------------------------------------------- metods: liタグをクリックした時の処理
    let target = e.target.style.backgroundColor
    let index = this.state.colors.indexOf(target)
    this.setState ({
      index: index,
      deleteColors: target,
      flag: true
    })
  }
  changeHandler (e) {
    // ----------------------------------------------------------- metods: FormInput.jsのdispatchを受け取る
    this.setState({
      addColors: e.dispatchValue,
      deleteColors: e.dispatchValue
    })
  }
  checkClick (e) {
    // ----------------------------------------------------------- metods: ButtonList.jsのdispatchを受け取る
    if (e.dispatchAddColors) {
      let addColor = e.dispatchAddColors
      this.state.colors.push(addColor)
      this.setState({
        colors: this.state.colors
      })
    } else {
      let deleteColor = e.dispatchDeleteColors
      if (deleteColor = this.state.deleteColors) {
        this.state.colors.splice(this.state.index, 1)
      }
      this.setState({
        colors: this.state.colors
      })
    }
  }
  render () {
    let lines = this.state.colors.map((d, i) => {
      let selectBorder = ''
      let colorName = ''
      let selectColors = this.state.colors[this.state.index]
      if (selectColors === d && this.state.flag) {
        selectBorder = '2px solid #000'
        colorName = selectColors
      }
      return (
        <ul>
          <li
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: d,
              border: selectBorder
            }}
            key={i}
            onClick={(e) => {
              this.handler(e)
            }}
          >
            { colorName }
            </li>
        </ul>
      )
    })
    return (
      <div>
        { lines }
        <FormInput
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
        <ButtonList
          text='追加'
          colors={this.state.colors}
          addColors={this.state.addColors}
          onClick={(e) => {
            this.checkClick(e)
          }}
        />
        <ButtonList
          text='削除'
          colors={this.state.colors}
          deleteColors={this.state.deleteColors}
          onClick={(e) => {
            this.checkClick(e)
          }}
        />
      </div>
    )
  }
}



// ver.1 同じファイルで実装している
// import React from 'react'
//
// class InputAddColors extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: '',
//       check: ''
//     }
//   }
//   changeHandler (e) {
//     let target = e.target.value
//     let targetValue = target.replace(/[^a-zA-z+]/g, '')
//     let pattern = /^[a-zA-z+]+$/
//     let checkTarget = pattern.test(targetValue)
//     this.setState({
//       value: targetValue,
//       check: checkTarget
//     })
//     this.props.onChange({
//       dispatchValue: targetValue,
//       dispatchCheck: checkTarget
//     })
//   }
//   render () {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={(e) => {
//             this.changeHandler(e)
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       index: 0,
//       colors: ['red', 'yellow', 'skyblue', 'pink'],
//       clickFlag: false,
//       deletClickFlag: false,
//     }
//     this.addInputColors = ''
//     this.deleteColors = ''
//   }
//   bgClickHandler (e) {
//     let color = e.target.style.backgroundColor
//     let colorIndex = this.state.colors.indexOf(color)
//     this.setState({
//       index: colorIndex,
//       clickFlag: true
//     })
//   }
//   changeHandler (e) {
//     this.addInputColors = e.dispatchValue
//   }
//   clickHandler () {
//     this.state.colors.push(this.addInputColors)
//     this.setState({
//       colors: this.state.colors
//     })
//   }
//   deleteHandler () {
//     let that = this
//     let arrayColors = this.state.colors
//     this.deleteColors = this.state.colors[this.state.index]
//     arrayColors.some(function (d, i) {
//       if (that.deleteColors === d) {
//         arrayColors.splice(i, 1)
//         that.setState({
//           colors: arrayColors
//         })
//       }
//     })
//     // todo validate機能をつける
//   }
//   render () {
//     let items = this.state.colors.map((value, index) => {
//       let border = ''
//       let colorName = ''
//       if (this.state.colors[this.state.index] === value && this.state.clickFlag) {
//         border = '1px solid #000'
//         colorName = value
//       }
//       return (
//         <li
//           style = {{
//             'width': '50px',
//             'height': '50px',
//             'backgroundColor': value,
//             'border': border,
//             'cursor': 'pointer'
//           }}
//           key={index}
//           onClick={(e) => {
//             this.bgClickHandler(e)
//           }}
//         >{ colorName }</li>
//       )
//     })
//     return (
//       <div>
//         <ul>
//           { items }
//         </ul>
//         <InputAddColors
//           onChange={(e) => {
//             this.changeHandler(e)
//           }}
//         />
//         <button
//           onClick={() => {
//             this.clickHandler()
//           }}
//         >色を追加する</button>
//         <button
//           onClick={() => {
//             this.deleteHandler()
//           }}
//         >削除する</button>
//       </div>
//     )
//   }
// }
