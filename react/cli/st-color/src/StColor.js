import React from 'react'

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
    console.log('colorBox', this.state.color)
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
    this.state ={
      color: ['red', 'yellow', 'Orange', 'green'],
      addColor: ''
    }
    this.addTarget = ''
  }
  handler (e) {
    this.addTarget = e.dispatchValue
  }
  addHandler() {
    this.setState({
      addColor: this.addTarget
    })
    console.log(this.state)
    let addColor = this.state.addColor
    let arryColor = this.state.color
    arryColor.push(addColor)
  }
  render () {
    console.log('本体', this.state.color)
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
      </div>
    )
  }
}