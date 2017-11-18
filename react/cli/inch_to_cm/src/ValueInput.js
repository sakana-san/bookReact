import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }
  handler (e) {
    let target = e.target.value
    let name = e.target.name
    // 数字しか入れない正規表現
    let targetValue = target.replace(/[^0-9.]+/g, '')
    this.props.onChange({
      dispatchValue: targetValue,
      dispatchName: name
    })
  }
  // this.props.onChange の情報が変更されたのをキャッチして、setStateさせる
  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value
    })
  }
  render () {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <input
          type="text"
          name={this.props.name}
          value={this.state.value}
          onChange={(e) => {
            this.handler(e)
          }}
        />
      </div>
    )
  }
}