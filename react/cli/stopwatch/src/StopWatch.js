import React from 'react'
import './StopWatch.css'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: 0,
      currentTime: 0,
      check: false,
      label: 'START'
    }
    this.handler = this.handler.bind(this)
    this.timerId = 0
  }
  componentWillMount () {
    let that = this
    updateTimer()
    function updateTimer() {
      that.timerId = setTimeout(function () {
        updateTimer()
        that.tick()
      }, 1000)
    }
  }
  componentWillUnmount () {
    clearTimeout(this.timerId)
  }
  tick () {
    let time = new Date().getTime()
    if(this.state.check === true) {
      this.setState({
        currentTime: time
      })
    }
  }
  handler () {
    let time = new Date().getTime()
    this.setState({
      startTime: time,
      currentTime: time,
      check: true,
      label: 'STOP'
    })
    if (this.state.check === true) {
      this.setState({
        check: false,
        label: 'START'
      })
    }
  }
  z (v) {
    let shaping = '00' + v
    return shaping.substr(shaping.length - 2, 2)
  }
  timesShaping () {
    let diff = this.state.currentTime - this.state.startTime
    let sec = Math.floor((diff / 1000) % 60)
    let min = Math.floor((diff / (60 * 1000)) % 60)
    let hour = Math.floor((diff / (60 * 60 * 1000)) % 24)
    return (
      <p className="disp">{this.z(hour)}:{this.z(min)}:{this.z(sec)}</p>
    )
  }
  render () {
    let label = this.state.label
    let displayTime = this.timesShaping()
    return (
      <div className="Stopwatch">
        { displayTime }
        <button className="button" onClick={() => {
          this.handler()
        }}>{ label }</button>
      </div>
    )
  }
}