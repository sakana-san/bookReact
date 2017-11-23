import React from 'react'
import '../App.css'
// superAgentの利用を制限
import request from 'superagent'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: null,
      flag: false
    }
  }
  componentWillMount () {
    request.get('./toin.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadJSON(err, res)
      })
  }
  loadJSON (err, res) {
    if (err) {
      console.log(err)
      return
    }
    this.setState({
      items: res.body,
      flag: true
    })
  }
  render () {
    let options = ''
    if (!this.state.flag) {
       return <div className="APP">現在読み込み中</div>
    } else {
      options = this.state.items.map((value, index) => {
        return (
          <option value={ value.number } key={ index }>
            { value.name }
          </option>
        )
      })
    }
    return (
      <div>
        <div className="App">
          強豪校: <select>{ options }</select>
        </div>
      </div>
    )
  }
}