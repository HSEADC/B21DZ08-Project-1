import './M_MenuSec.scss'
import React from 'react'

import A_MenuSec from '../A_MenuSec/A_MenuSec.jsx'

export default class M_MenuSec extends React.Component {
  render() {
    // const { value } = this.state

    return (
      <div className="M_MenuSec">
        <A_MenuSec text="КАРТА СОЗВЕЗДИЙ" />
        <A_MenuSec text="МИФОЛОГИЯ" />
        <A_MenuSec text="ЗОДИАКИ" />
        <A_MenuSec text="О НАС" />
      </div>
    )
  }
}
