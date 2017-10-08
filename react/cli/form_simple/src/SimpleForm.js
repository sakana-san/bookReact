import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      hobby: ''
    }
  }
  inputChange (e) {
    let value = e.target.value
    let key = e.target.name
    this.setState({
      [key]: value
    })
  }
  inputClick (e) {
    window.alert(JSON.stringify(this.state))
  }
  render () {
    return (
      <div>
        <form onSubmit={(e) => {
          this.inputClick(e)
        }}>
          <p>名前</p>
          <input
            name="name"
            type="text"
            onChange={(e) => {
              this.inputChange(e)
            }}
          />
          <p>年齢</p>
          <input
            name="age"
            type="number"
            onChange={(e) => {
              this.inputChange(e)
            }}
          />
          <p>趣味</p>
          <input
            name="hobby"
            type="text"
            onChange={(e) => {
              this.inputChange(e)
            }}
          />
          <p>
            <input type="submit" value="送信"/>
          </p>
        </form>
      </div>
    )
  }
}