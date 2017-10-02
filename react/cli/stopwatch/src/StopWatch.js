import React from 'react'
import './StopWatch.css'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false,
      startTime: 0,
      currentTime: 0,
      label: 'START'
    }
    this.timerId = 0
  }
  componentWillMount () {
    let that = this
    updateTimer()
    function updateTimer () {
      that.timerId = setTimeout(function () {
        that.tick()
        updateTimer()
      }, 1000)
    }
  }
  componentWillUnmount () {
    clearTimeout(this.timerId)
  }
  tick () {
    if (this.state.flag) {
      const v = Date.now()
      this.setState({
        currentTime: v
      })
    }
  }
  clickHandler () {
    const flag = this.state.flag
    if (flag) {
      this.setState({
        flag: false,
        label: 'START'
      })
      return
    }
    const v = new Date().getTime();
    this.setState({
      flag: true,
      startTime: v,
      currentTime: v,
      label: 'STOP'
    })
  }
  getDisp () {
    const s = this.state
    const diff = s.currentTime - s.startTime
    const ss = Math.floor((diff / 1000) % 60)
    const mm = Math.floor((diff / (60 * 1000)) % 60)
    const hh = Math.floor((diff / (60 * 60 * 1000)) % 24)
    const z = (num) => {
      const set = '00' + String(num)
      return set.substr(set.length - 2, 2)
    }
    return <span className="disp">
      {z(hh)}:{z(mm)}:{z(ss)}
    </span>
  }
  render () {
    return (
      <div className="Stopwatch">
        <p className="disp">{this.getDisp()}</p>
        <button className="button" onClick={() => {
          this.clickHandler()
        }}>{ this.state.label }</button>
      </div>
    )
  }
}