import React from 'react';
import FormInput from './FormInput';


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      tel: '',
      allOk: false
    }
    this.oks = {}
  }
  handler (e) {
    this.oks[e.dispatchName] = e.dispatchShaping
    this.setState({
      [e.dispatchName]: (this.oks[e.dispatchName]) ? e.dispatchValue : '',
      allOk: this.oks['email'] && this.oks['email']
    })
  }
  submitHandler () {
    if (this.state.allOk === true) {
      window.alert(JSON.stringify(this.state))
    } else {
      window.alert('正しく入力してください')
    }
  }
  render () {
    return(
      <div>
        <form onSubmit={() => {
          this.submitHandler()
        }}>
          <h2>複数の場合</h2>
          <FormInput
            title="メール:"
            type="text"
            name="email"
            value={ this.state.email }
            onChange={(e) => {
              this.handler(e)
            }}
          />
          <span> { this.state.label } </span>
          <FormInput
            title="電話番号:"
            type="number"
            name="tel"
            value={ this.state.tel }
            onChange={(e) => {
              this.handler(e)
            }}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}