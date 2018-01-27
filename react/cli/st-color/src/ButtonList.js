import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: this.props.colors,
      addColors: '',
      deleteColors:''
    }
  }
  componentWillReceiveProps (newProps) {
    this.setState({
      addColors: newProps.addColors,
      deleteColors: newProps.deleteColors
    })
  }
  checkClick () {
    // ----------------------------------------------------------- metods: 追加、削除ボタン押下時の処理
    if (this.state.addColors === '') return
    if (this.props.text === '追加') {
      this.props.onClick({
        dispatchAddColors: this.state.addColors
      })
    } else {
      this.props.onClick({
        dispatchDeleteColors: this.state.deleteColors
      })
    }
  }
  render () {
    return (
      <div>
        <button
          onClick={(e) => {
            this.checkClick(e)
          }}
        >{this.props.text}
        </button>
      </div>
    )
  }
}