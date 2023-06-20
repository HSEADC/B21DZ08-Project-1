import './A_MenuSec.scss'
import React from 'react'
export default class A_MenuSec extends React.Component {
  render() {
    const { text, handleClick } = this.props

    return (
      <div className="A_MenuSec" onClick={handleClick}>
        {text}
      </div>
    )
  }
}
