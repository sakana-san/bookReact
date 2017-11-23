import React from 'react'
import '../App.css'
import request from 'superagent'

class InputRadio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handler(e) {
    let target = e.target.value
    let name = e.target.name
    this.setState({
      value: name
    })
    this.props.onClick({
      dispatch: name
    })
  }
  render () {
    return (
      <div>
        <input
          type="radio"
          name={ this.props.name }
          checked={ this.state.value }
          onClick={(e) => {
            this.handler(e)
          }}
        />
        { this.props.name }
      </div>
    )
  }
}


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choko: 'チョコ',
      umebosi: '梅干し',
      ramune: 'ラムネ'
    }
  }
  handler (e) {
    let target = e.dispatch
    this.setState({
      value: target
    })
  }
  clickHandler () {
   window.alert(this.state.value)
  }
  render () {
    return (
      <div>
        <form
          onSubmit={() => {
            this.clickHandler()
          }}>
          <InputRadio
            name="choko"
            onClick={(e) => {
              this.handler(e)
            }}
          />
          <InputRadio
            name="umebosi"
            onClick={(e) => {
              this.handler(e)
            }}
          />
          <InputRadio
            name="ramune"
            onClick={(e) => {
              this.handler(e)
            }}
          />
          <button>決定</button>
        </form>
      </div>
    )
  }
}