import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type,
      name: this.props.name,
      value: this.props.value,
      flag: false
    }
  }
  // プロパティの型を定義 (defaultの中に記述するにはstaticが必要)
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  // プロパティの初期値を定義 (defaultの中に記述するにはstaticが必要)
  static defaultProps = {
    value: '',
    onChange: null
  }
  handler (e) {
    let target = e.target.value
    let name = e.target.name
    let shaping = this.checkValue(target, name)
    this.setState({
      value: shaping,
      flag: true
    })
    this.props.onChange({
      dispatchValue: target,
      dispatchShaping: shaping,
      dispatchName: name
    })
  }
  checkValue (target, name) {
    let targetValue = target
    if (name === 'email') {
      targetValue.replace(/[^\u0020-\u007e]+/g, '')
      let emailShaping = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return emailShaping.test(targetValue)
    } else if (name === 'tel') {
      targetValue.replace(/[^0-9-()]+/g, '')
      let telShaping = /^[0-9-()+]+$/
      return telShaping.test(targetValue)
    }
  }
  checkMessage () {
    let notice = null
    if (this.state.flag === true) {
      if (this.state.value) {
        notice = <span>OK</span>
      } else {
        notice = <span>NG</span>
      }
      return notice
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      type: newProps.type,
      name: newProps.name,
      value: newProps.value
    })
  }
  render () {
    let message = this.checkMessage()
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <input
          type={ this.state.text }
          name={ this.state.name }
          onChange={(e) => {
            this.handler(e)
          }}
        />
        <span>{ message }</span>
      </div>
    )
  }
}