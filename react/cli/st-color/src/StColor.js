import React from 'react'


class InputAddColors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      check: ''
    }
  }
  changeHandler (e) {
    let target = e.target.value
    let targetValue = target.replace(/[^a-zA-z+]/g, '')
    let pattern = /^[a-zA-z+]+$/
    let checkTarget = pattern.test(targetValue)
    this.setState({
      value: targetValue,
      check: checkTarget
    })
    this.props.onChange({
      dispatchValue: targetValue,
      dispatchCheck: checkTarget
    })
  }
  render () {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
      </div>
    )
  }
}


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      colors: ['red', 'yellow', 'skyblue', 'pink'],
      clickFlag: false,
      deletClickFlag: false,
    }
    this.addInputColors = ''
    this.deleteColors = ''
  }
  bgClickHandler (e) {
    let color = e.target.style.backgroundColor
    let colorIndex = this.state.colors.indexOf(color)
    this.setState({
      index: colorIndex,
      clickFlag: true
    })
  }
  changeHandler (e) {
    this.addInputColors = e.dispatchValue
  }
  clickHandler () {
    this.state.colors.push(this.addInputColors)
    this.setState({
      colors: this.state.colors
    })
  }
  deleteHandler () {
    let that = this
    let arrayColors = this.state.colors
    this.deleteColors = this.state.colors[this.state.index]
    arrayColors.some(function (d, i) {
      if (that.deleteColors === d) {
        arrayColors.splice(i, 1)
        that.setState({
          colors: arrayColors
        })
      }
    })
    // todo validate機能をつける
  }
  render () {
    let items = this.state.colors.map((value, index) => {
      let border = ''
      let colorName = ''
      if (this.state.colors[this.state.index] === value && this.state.clickFlag) {
        border = '1px solid #000'
        colorName = value
      }
      return (
        <li
          style = {{
            'width': '50px',
            'height': '50px',
            'backgroundColor': value,
            'border': border,
            'cursor': 'pointer'
          }}
          key={index}
          onClick={(e) => {
            this.bgClickHandler(e)
          }}
        >{ colorName }</li>
      )
    })
    return (
      <div>
        <ul>
          { items }
        </ul>
        <InputAddColors
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
        <button
          onClick={() => {
            this.clickHandler()
          }}
        >色を追加する</button>
        <button
          onClick={() => {
            this.deleteHandler()
          }}
        >削除する</button>
      </div>
    )
  }
}


// ver.1
// import React from 'react'
//
// class ColorBox extends React.Component {
//   constructor(props) {
//     super(props)
//     this. state = {
//       index: 0,
//       colors: ['red', 'blue', 'green', 'pink', 'yellow'],
//       flag: false
//     }
//   }
//   handler (color) {
//     let i = this.state.colors.indexOf(color)
//     // 押下したタイミングでindexをsetStateしてデータを更新
//     this.setState({
//       index: i,
//       flag: true,
//     })
//   }
//   render () {
//     let items = this.state.colors.map((d, i) => {
//       // ここで初期値設定しないと、全要素にborderがついてしまう
//       let checkStyle = {
//         target: '',
//         border: '',
//         label: ''
//       }
//       checkStyle.target =  (i >= 0 && this.state.flag === true) ? this.state.colors[this.state.index] : ''
//       if (d === checkStyle.target) {
//         checkStyle.border = '2px solid #000'
//         checkStyle.label = d
//       }
//       return (
//         <li
//           key = {i}
//           style = {{
//             'width': '50px',
//             'height': '50px',
//             'backgroundColor': d,
//             'border': checkStyle.border,
//             'cursor': 'pointer'
//           }}
//           onClick={() => {
//             this.handler(d)
//           }}
//         >
//           <p
//             style = {{
//               'marginLeft': '60px',
//               'color': d,
//             }}
//           >{ checkStyle.label }</p>
//         </li>
//       )
//     })
//     return (
//       <ul>
//         { items }
//       </ul>
//     )
//   }
// }
//
//
// export default class extends React.Component {
//   render () {
//     return (
//       <ColorBox />
//     )
//   }
// }