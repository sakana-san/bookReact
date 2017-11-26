import React from 'react'

// todo 親要素をColorBoxの要素にして,InputColor, ClickColorのComponentを書く
class AddColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      value: '',
      converted: ''
    }
  }
  handler (e) {
    let target = e.target.value
    let targetValue = target.replace(/[^a-zA-z+]/g, '')
    let pattern = /^[a-zA-z+]+$/
    let shaping = pattern.test(targetValue)
    this.setState({
      value: targetValue,
      converted: shaping
    })
    this.props.onChange({
      dispatchValue: targetValue,
      dispatchConverted: shaping
    })
  }
  render () {
    return (
      <div>
        <input
          type="text"
          value={ this.state.value }
          onChange={(e) => {
            this.handler(e)
          }}
        />
      </div>
    )
  }
}


class ColorBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: '',
      color: this.props.color
    }
  }
  handler(d) {
    let target = this.state.color.indexOf(d)
    this.setState({
      index: target
    })
    this.props.onClick({
      dispatchColor: this.state.color,
    })
  }
  render () {
    let border = ''
    let label = ''
    let currentTarget = this.state.color[this.state.index]
    let item = this.state.color.map((d, i) => {
      if (currentTarget === d) {
        border = '1px solid #000'
        label = d
      } else {
        label = ''
        border = 'none'
      }
      return (
        <li
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: d,
            border: border
          }}
          key={i}
          onClick={() => {
            this.handler(d)
          }}
        >
          { label }
        </li>
      )
    })
    return (
      <ul>{ item }</ul>
    )
  }
}



export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ['red', 'yellow', 'orange', 'green'],
    }
    this.addTarget = ''
    this.deleteTarget = ''
  }
  handler (e) {
    this.addTarget = e.dispatchValue
    this.deleteTarget = e.dispatchValue
  }
  addHandler() {
    let addColor = this.addTarget
    let arryColor =  this.state.color
    arryColor.push(addColor)
    this.setState({
      color: arryColor
    })
  }
  deleteHandler () {
    // todo クリック内ではindexOfだけを入れて、クリック街でforEachやcheckValueする
    let that = this
    let deleteColor = this.deleteTarget
    let arryColor =  this.state.color
    let checkColor = arryColor.indexOf(deleteColor)
    let tmpData = []
    if (this.addTarget !== '') {
      arryColor.forEach(function (d, i) {
        if (d === deleteColor) {
          arryColor.splice(i, 1)
          that.setState({
            color: arryColor,
          })
        }
      })
      if (arryColor.length > 0 && checkColor === -1) {
        window.alert('表示されているcolorを入力してください')
      } else if ((arryColor.length - 1) <= 0 && checkColor === -1) {
        window.alert('値がありません')
      }
    } else {
      window.alert('削除するcolorを入力してください')
    }
  }
  render () {
    return (
      <div>
        <ColorBox
          color={ this.state.color }
        />
        <AddColor
          color={ this.state.color }
          onChange={(e) => {
            this.handler(e)
          }}
        />
        <button
          onClick={() => {
            this.addHandler()
          }}
        >色を追加する</button>
        <button
          onClick={(e) => {
            this.deleteHandler(e)
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