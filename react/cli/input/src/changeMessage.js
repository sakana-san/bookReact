import React from 'react';

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      code: this.props.switchCode,
      label: '',
      bColor: ''
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.switchCode) {
      this.setState({
        code:  newProps.switchCode,
        label: 'OK',
        bColor: 'blue'
      })
    } else {
      this.setState({
        code:  '',
        label: 'NG',
        bColor: 'red'
      })
    }
  }
  render () {
    return (
      <span
        style={{
          'marginLeft': '20px',
          'padding': '40px',
          'backgroundColor': this.state.bColor
        }}
      >
        { this.state.label}
      </span>
    )
  }
}
