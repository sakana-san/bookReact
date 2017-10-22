import React, {Component} from 'react'
import ValueInput from './ValueInput'

// インチセンチの変換コンポーネント
export default class InchToCm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inch: '',
      cm: ''
    }
  }
  inchChanged (e) {
    let inch = e.dispatch
    let cm = inch * 2.54
    this.setState({
      inch: inch,
      cm: cm
    })
  }
  cmChanged (e) {
    let cm = e.dispatch
    let inch = cm * 2.54
    this.setState({
      inch: inch,
      cm: cm
    })
  }
  render () {
    return (
      <div>
        <ValueInput
          title='inch'
          value={this.state.inch}
          onChange={e => this.inchChanged(e)}
        />
        <ValueInput
          title='cm'
          value={this.state.cm}
          onChange={e => this.cmChanged(e)}
        />
      </div>
    )
  }
}
