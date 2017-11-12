import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      converted: '',
      flag: false
    }
  }
  handler (e) {
    let target = e.target.value
    let targetValue = target.replace(/[^0-9-]+/g, '')
    let convertedZip = /^\d{3}-\d{4}$/
    let shaping = convertedZip.test(targetValue)
    this.setState({
      value: targetValue,
      converted: shaping,
      flag: true
    })
  }
  checkMessage() {
    let notice = ''
    let nullCheck = (this.state.value !== '') ? notice = 'NG' : notice = ''
    if (this.state.flag) {
      if (this.state.converted) {
        notice = 'OK'
      } else {
        nullCheck
      }
    }
    return notice
  }
  render () {
    let message = this.checkMessage()
    return (
      <div>
        <h3>{ this.props.label }</h3>
        <input
          type="text"
          value={ this.state.value }
          onChange={(e) => {
            this.handler(e)
          }}
        />
        <span>{ message }</span>
      </div>
    )
  }
}