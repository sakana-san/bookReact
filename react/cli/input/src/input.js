import React from 'react';
import ChangeMessage from './changeMessage';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ''
    }
  }
  handler (e) {
    let numberShaping = e.target.value.replace(/[^0-9-]+/g, '')
    let shaping = /^\d{3}-\d{4}$/
    this.setState({
      code: shaping.test(numberShaping),
    })
  }
  render () {
    return(
      <div>
        <p>郵便番号2</p>
        <input
          type="text"
          onChange={(e) => {
            this.handler(e)
          }}
        />
        <ChangeMessage
          switchCode={this.state.code}
        />
      </div>
    )
  }
}
