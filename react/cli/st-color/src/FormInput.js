import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  changeHandler(e) {
    // ----------------------------------------------------------- metods: テキスト入力時、英語しか入力させない
    let target = e.target.value
    let targetValue = target.replace(/[^a-zA-z+]/g, '')
    let pattern = /^[a-zA-z+]+$/
    let check = pattern.test(targetValue)
    this.setState({
      value: targetValue
    })
    this.props.onChange({
      dispatchValue: targetValue,
      dispatchCheck: check
    })
  }
  render () {
    return (
      <form >
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
      </form>
    )
  }
}