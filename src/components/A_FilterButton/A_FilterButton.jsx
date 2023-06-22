import './A_FilterButton.scss'
import classnames from 'classnames'
import React from 'react'

export default class A_FilterButton extends React.Component {
  render() {
    const { className, text, disabled, type, handleClick, active, tag } =
      this.props

    const classes = classnames({
      A_FilterButton: true,
      disabled: disabled,
      [`${className}`]: className,
      [`${type}`]: true,
      active: active,
      tag: 'none'
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}
