import React from 'react'

class ColorBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ['yellow', 'red', 'blue', 'green', 'pink'],
      index: 0,
      bd: ''
    }
  }
  handler (e) {
    let target = e.target.style.backgroundColor
    let i = this.state.colors.indexOf(target)
    this.setState({
      index: i
    })
  }
  render () {
    let current = (this.state.index >= 0) ? this.state.colors[this.state.index] : ''
    let items = this.state.colors.map((d, i) => {
      let bd = ''
      console.log('current上', current)
      console.log('d上', d)
      if (d === current) {
        console.log('current下', current)
        console.log('d下', d)
        bd = '2px solid #000'
      }
      const cstyle = {
        color: d,
        border: bd
      }
      console.log(cstyle)
      return (
        <li
          key={i}
          style={
            {
              'backgroundColor': d,
              'width': '50px',
              'height': '50px',
              'cursor': 'pointer',
            }
          }
          onClick={(e) => {
            this.handler(e)
          }}
        ></li>
      )
    })
    return (
      <ul>
        {items}
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