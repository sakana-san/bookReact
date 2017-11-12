import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      convated: '',
      flag: false
    }
  }
  // プロパティの型を定義 (defaultの中に記述するにはstaticが必要)
  static PropTypes = {
    value: PropTypes.string.isRequired,
    convated: PropTypes.string,
    onChange: PropTypes.func
  }
  // プロパティの初期値を定義 (defaultの中に記述するにはstaticが必要)
  static defaultProps = {
    value: '',
    convated: '',
    onChange: null
  }
  handler(e) {
    let tValue = e.target.value
    let tName = e.target.name
    // メールのパターンをチェックする
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // 電話番号のパターンチェック
    let phonePattern = /^[0-9-()+]+$/
    // 英数字しか入れないようにする。不要な文字は削除
    let filterValue = (tName === 'email') ? tValue.replace(/[^\u0020-\u007e]+/g, '') : tValue.replace(/[^0-9-()+]/g, '')
    // filterValueが、パターンの正規表現とマッチすればtrueを返す
    let convatedValue = (tName === 'email') ? emailPattern.test(filterValue) : phonePattern.test(filterValue)
    this.setState({
      value: filterValue,
      convated: convatedValue,
      flag: true

    })
    // チェックした情報をinput.jsに伝達する。input.jsでは、この情報を使用して送信チェックする
    this.props.onChange({
      dispatchName: tName,
      dispatchValue: filterValue,
      dispatchConvated: convatedValue
    })
    }
  checkMessage() {
    let check = ''

    let nullCheck = this.state.value !== '' ?  check = 'NG' : check = ''
    // 最初非表示。テキストが入力されると表示される。
    // convatedとマッチしれればOKを返す。
    // そうじゃなければNGを返す。かつ、空白なら非表示。
    if (this.state.flag) {
      if (this.state.convated) {
        check = 'OK'
      } else {
        nullCheck
      }
    }
    return check
  }
  render () {
    let message = this.checkMessage()
    return (
      <div>
        <h3>{ this.props.label }</h3>
        <input
          type="text"
          name={ this.props.name }
          value={ this.state.value }
          onChange={(e) => {
            this.handler(e)
          }}
        />
        <span>{ message }</span>
      </div>
    )
  }
}