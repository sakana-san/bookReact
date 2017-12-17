import React from 'react'
import ReactDOM from 'react-dom'
const { clipboard } = require('electron')


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isConvert: false,
      isWatch: false,
      text: '',
      convert: '',
      name: ''
    }
    setInterval(function () {
      this.tick()
    }.bind(this), 1000)
  }
  convertText(str) {
    let pattern = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    })
    return pattern
  }
  tick() {
    if (this.state.isWatch) {
      this.setState({
        text: this.convertText(this.state.text)
      })
    }
  }
  changeState(e) {
    let name = e.target.name
    this.setState({
      [name]: !this.state[name],
    })
    if (name === 'isConvert') {
      if (!this.state.isWatch) {
        clearInterval(this.tick())
        this.setState({
          text: this.convertText(this.state.text)
        })
      }
    }
  }
  onChangeText(e) {
    let text = e.target.value
    this.setState({
      text: text
    })
  }
  render () {
    const taStyle = {
      width: '100%',
      height: '300px',
      backgroundColor: '#F4F4F4'
    }
    return (
      <div className='window'>
        <div className='window-content'>
          <div className='pane-group'>
            <div className='pane-sm sidebar'>
              <div>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <label>
                      <input type='checkbox'
                        name='isWatch'
                        // onChangeする
                        checked={ this.state.isWatch }
                        onChange={(e) => {
                          this.changeState(e)
                        }}
                      />
                      監視を有効に
                    </label>
                  </li>
                  <li className='list-group-item'>
                    <label>
                      <input type='checkbox'
                        name='isConvert'
                        checked={ this.state.isConvert }
                        onChange={(e) => {
                          this.changeState(e)
                        }}
                      />
                      全角英数を半角に
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='pane'>
              <div className='padded-more'>
                クリップボード:<br />
                <textarea
                  style={taStyle}
                  value={this.state.text}
                  onChange={(e) => {
                    this.onChangeText(e)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)