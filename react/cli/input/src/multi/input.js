import React from 'react'
import FormInput from "./FormInput"


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      phone: '',
      flag: {
        allOk: false,
        emailOk: false,
        phoneOk: false,
        allNg: false
      }
    }
    this.result = {}
    this.isOks = {}
    this.flag = {}
  }
  handler (e) {
    // isOksオブジェクトにe.dispatchNameという箱を作り、そこにe.dispatchConvatedを代入する
    // flagの制御に使う
    this.isOks[e.dispatchName] = e.dispatchConvated
    // resultオブジェクトにe.dispatchNameという箱を作り、そこにe.dispatchValueを代入する
    // 送信クリック時の表示に使う
    this.result[e.dispatchName] = e.dispatchValue
    this.setState({
      [e.dispatchName]: e.dispatchValue,
      flag: {
        allOk: (this.isOks['email'] && this.isOks['phone']),
        emailNg: (!this.isOks['email'] && this.isOks['phone']),
        phoneNg: (this.isOks['email'] && !this.isOks['phone']),
        allNg: (!this.isOks['email'] && !this.isOks['phone'])
      }
    })
  }
  submitHandler () {
    if (this.state.flag.allOk) {
      window.alert(JSON.stringify( this.result ))
    } else if (this.state.flag.emailNg) {
      window.alert('メールを入力してください')
    } else if (this.state.flag.phoneNg) {
      window.alert('電話番号を入力してください')
    } else {
      window.alert('両方入力してください')
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={(e) => {
          this.submitHandler(e)
        }}>
          <FormInput
            label="メール"
            name="email"
            onChange={(e) => {
              this.handler(e)
            }}
          />
          <FormInput
            label="電話"
            name="phone"
            onChange={(e) => {
              this.handler(e)
            }}
          />
          <input type="submit" value="送信"/>
        </form>
      </div>
    )
  }
}