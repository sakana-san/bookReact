import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChange (e) {
      let targetValue = e.target.value.replace(/[^0-9.]+/g, '')
      this.props.onChange({
        dispatchName: e.target.name,
        dispatchvalue: targetValue
      })
  }
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={(e) => {
            this.handleChange(e)
          }}
        />
      </div>
    )
  }
}