import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }
  handler(e) {
    let target = e.target.value
    // 整数しか出さないようにする
    let shaping = target.replace(/[^0-9.]+/g, '')
    this.setState({
      value: shaping
    })
    // shaiping変数をpropsで親に渡す
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        dispatch: shaping
      })
    }
  }
  // this.props.onChange の情報が変更されたのをキャッチして、setStateさせる
  componentWillReceiveProps(newProps) {
    console.log()
    this.setState({
      value: newProps.value
    })
  }
  render () {
    console.log(this.state.value)
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.handler(e)
          }}
        />
      </div>
    )
  }
}