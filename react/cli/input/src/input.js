import React from 'react'
import ChangeMessage from './changeMessage'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <ChangeMessage
          label="郵便番号"
          onChange={(e) => {
            this.handler(e)
          }}
        />
      </div>
    )
  }
}