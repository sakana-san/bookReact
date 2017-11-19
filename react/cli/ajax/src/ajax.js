import React from 'react'
import './App.css'
// superAgentの利用を制限
import request from 'superagent'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       items: {}
    }
  }
  componentWillMount () {
    request.get('./toin.json')
      .end(this.callbackGet())
  }
  callbackGet (err, res) {
    if (err) {
      return
    }
    console.log(res)
    // this.setState({
    //   items: res.body
    // })
  }
  render () {
    // let options = this.state.items.map((value, index) => {
    //   console.log(value)
    // })
    return (
      <div>
        <div className="App">
          強豪校: <select>テスト</select>
        </div>
      </div>
    )
  }
}