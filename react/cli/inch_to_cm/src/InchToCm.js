import React from 'react'
import ValueInput from './ValueInput'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inch: 0,
      cm: 0
    }
  }
  inchChanged (e) {
    this.setState({
      cm: this.shape(e.dispatchvalue * 2.45),
      inch: e.dispatchvalue
    })
  }
  cmChanged (e) {
    this.setState({
      cm: e.dispatchvalue,
      inch: this.shape(e.dispatchvalue * 2.45)
    })
  }
  shape (num) {
    return num.toFixed(2)
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