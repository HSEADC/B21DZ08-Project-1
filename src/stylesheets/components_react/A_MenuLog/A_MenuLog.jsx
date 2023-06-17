import './A_MenuLog.scss'
import React from 'react'
export default class A_MenuLog extends React.Component {
  render() {
    const { text, handleClick } = this.props

    return (
      <div className="A_MenuLog" onClick={handleClick}>
        {text}
      </div>
    )
  }
}
