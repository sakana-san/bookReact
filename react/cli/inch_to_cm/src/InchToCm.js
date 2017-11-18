import React from 'react'
import ValueInput from "./ValueInput"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inch: '',
      cm: ''
    }
  }

  inchChanged (e) {
    let value = e.dispatchValue
    this.setState({
      inch: value,
      cm: Math.floor((value * 2.45) * 100) / 100
    })
  }
  cmChanged (e) {
    let value = e.dispatchValue
    this.setState({
      inch: Math.floor((value * 2.45) * 100) / 100,
      cm: value
    })
  }
  render () {
    return (
      <div>
        <ValueInput
          title="inch:"
          name="inch"
          value={this.state.inch}
          onChange={(e) => {
            this.inchChanged(e)
          }}
        />
        <ValueInput
          title="cm:"
          name="cm"
          value={this.state.cm}
          onChange={(e) => {
            this.cmChanged(e)
          }}
        />
      </div>
    )
  }
}