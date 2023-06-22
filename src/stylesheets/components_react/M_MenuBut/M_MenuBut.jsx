import './M_MenuBut.scss'
import React from 'react'

import M_MenuSec from '../M_MenuSec/M_MenuSec.jsx'
import A_MenuLog from '../A_MenuLog/A_MenuLog.jsx'

export default class M_MenuBut extends React.Component {
  render() {
    // const { value } = this.state

    return (
      <div className="M_MenuBut">
        <A_MenuLog text="МИфОС" />
        <M_MenuSec />
      </div>
    )
  }
}
