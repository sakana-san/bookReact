import React from 'react'
import ReactDOM from 'react-dom'


export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  setTimerHandler (e) {
    let checkFlag = false
    checkFlag = e.target.checked
    setInterval(() => {
      this.tick(checkFlag)
    }, 1000)
    if (!checkFlag) {
      this.clearSetTimer()
    }
  }
  tick (checkFlag) {
    this.setState({
      value: (checkFlag) ? this.patternValue() : this.state.value
    })
  }
  clearSetTimer () {
    console.log('off時にclreatInterval')
    clearInterval(this.tick())
  }
  patternValue () {
    let str = this.state.value
    let pattern = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    })
    return pattern
  }
  checkboxHandler (e) {
    this.setState({
      value: (e.target.checked) ? this.patternValue() : this.state.value
    })
  }
  textChangeHandler (e) {
    let target = e.target.value
    this.setState({
      value: target
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
                      <input
                        onClick={(e) => {
                          this.setTimerHandler(e)
                        }}
                        type="checkbox"
                      />
                      監視を有効に
                    </label>
                  </li>
                  <li className='list-group-item'>
                    <label>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          this.checkboxHandler(e)
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
                クリップボード:
                <textarea
                  style={taStyle}
                  value={this.state.value}
                  onChange={(e) => {
                    this.textChangeHandler(e)
                  }}
                ></textarea>
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
