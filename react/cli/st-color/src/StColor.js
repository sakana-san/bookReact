import React from 'react'

class ColorBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ['orange', 'blue', 'brown', 'pink', 'red', 'black'],
      index: 0
    }
  }
  handler (e) {
    // 押下時に、どの色を選んだかを判別
    let target = e.target.style.backgroundColor
    // 押下した色と、Colorsの配列が一致した番号取得
    let targetNumber = this.state.colors.indexOf(target)
    // 押下したタイミングでindexをsetStateしてデータを更新
    this.setState({
      index: targetNumber
    })
  }
  render () {
    let index = this.state.index
    let colors = this.state.colors
    // 配列のcolorsを回してDOMを生成
    let items = this.state.colors.map((d, i) => {
      // colors[index]とすればクリックした色が取得できる
      let current = (index >= 0) ? colors[index] : ''
      // ここで初期値を設定しないと、全要素にborderがついてしまう
      let design = {
        border: '',
        colorName: ''
      }
      // colorsにある色とクリックした色が同じなら
      if (d === current) {
        design = {
          border: '2px solid #000',
          colorName: d
        }
      }
      return (
        <li
          key={i}
          style={{
            'width': '50px',
            'height': '50px',
            'backgroundColor': d,
            'border': design.border,
            'cursor': 'pointer'
          }}
          onClick={(e) => {
            this.handler(e)
          }}
        >
          <p
            style={{
              'paddingLeft': '70px',
              'color': design.colorName
            }}
          >
            { design.colorName }
          </p>
        </li>
      )
    })
    return (
       <ul>
         { items}
       </ul>
    )
  }
}



export default class extends React.Component {
  render () {
    return (
      <div>
        <ColorBox />
      </div>
    )
  }
}