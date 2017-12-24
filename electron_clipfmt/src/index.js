import React from 'react'
import ReactDOM from 'react-dom'


export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.stringFlag = false
    this.setTimeFlag = false
  }
  patternValue () {
    let str = this.state.value
    let pattern = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    })
    return pattern
  }
  handler (e) {
    let str = e.target.value
    this.setState({
      value: str
    })
  }
  checkHandler (e) {
    this.stringFlag = e.target.checked
    this.setState({
      value: (this.stringFlag) ? this.patternValue() : this.state.value
    })
  }
  setTimeHandler (e) {
    this.setTimeFlag = e.target.checked
    setInterval(function () {
      this.tick(e)
    }.bind(this), 1000)
    if (!this.setTimeFlag) {
      this.clearSetTime()
    }
  }
  tick () {
    this.setState({
      value: (this.setTimeFlag) ? this.patternValue() : this.state.value
    })
  }
  clearSetTime () {
    console.log('off時にclreatInterval')
    clearInterval(this.tick())
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
                        onChange={(e) => {
                          this.setTimeHandler(e)
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
                          this.checkHandler(e)
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
                    this.handler(e)
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
