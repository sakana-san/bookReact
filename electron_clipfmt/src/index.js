import React from 'react'
import ReactDOM from 'react-dom'
const { clipboard } = require('electron')


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  onChangeText (e) {
    let target = e.target.value
    this.setState({
      text: target
    })
  }
  render () {
    const taStyle = {
      width: '100%',
      height: '300px',
      backgroundColor: '#F4F4F4'
    }
    return (<div className='window'>
      <div className='window-content'>
        <div className='pane-group'>
          <div className='pane-sm sidebar'>
            <div>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <label>
                    <input type='checkbox'
                     name='isActive'
                     // onChangeする
                    />
                    監視を有効に
                  </label>
                </li>
                <li className='list-group-item'>
                  <label>
                    <input type='checkbox'
                     name='zen2han'
                      // onChangeする
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
    </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)