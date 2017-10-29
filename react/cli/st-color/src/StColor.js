import React from 'react'

class ColorBox extends React.Component {
  constructor(props) {
    super(props)
    this. state = {
      index: 0,
      colors: ['red', 'blue', 'green', 'pink', 'yellow'],
      flag: false
    }
  }
  handler (color) {
    let i = this.state.colors.indexOf(color)
    // 押下したタイミングでindexをsetStateしてデータを更新
    this.setState({
      index: i,
      flag: true,
    })
  }
  render () {
    let items = this.state.colors.map((d, i) => {
      // ここで初期値設定しないと、全要素にborderがついてしまう
      let checkStyle = {
        target: '',
        border: '',
        label: ''
      }
      checkStyle.target =  (i >= 0 && this.state.flag === true) ? this.state.colors[this.state.index] : ''
      if (d === checkStyle.target) {
        checkStyle.border = '2px solid #000'
        checkStyle.label = d
      }
      return (
      <li
        key = {i}
        style = {{
          'width': '50px',
          'height': '50px',
          'backgroundColor': d,
          'border': checkStyle.border,
          'cursor': 'pointer'
        }}
        onClick={() => {
          this.handler(d)
        }}
      >
        <p
          style = {{
            'marginLeft': '60px',
            'color': d,
          }}
        >{ checkStyle.label }</p>
      </li>
      )
    })
    return (
      <ul>
        { items }
      </ul>
    )
  }
}


export default class extends React.Component {
  render () {
    return (
      <ColorBox />
    )
  }
}