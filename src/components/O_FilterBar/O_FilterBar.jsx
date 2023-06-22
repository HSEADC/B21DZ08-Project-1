import './O_FilterBar.scss'
import classnames from 'classnames'
import React from 'react'
import A_FilterButton from '../A_FilterButton/A_FilterButton.jsx'
import M_FilterButtonMap from '../M_FilterButtonMap/M_FilterButtonMap.jsx'
import M_FilterButtonZodiak from '../M_FilterButtonZodiak/M_FilterButtonZodiak.jsx'

export default class O_FilterBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filters, handleFilterClick } = this.props

    return (
      <div className="O_FilterBar">
        <A_FilterButton
          className="all"
          text="все"
          handleClick={() => handleFilterClick('all', 'none')}
        />

        <M_FilterButtonMap
          filters={filters}
          handleFilterClick={handleFilterClick}
        />

        <M_FilterButtonZodiak
          filters={filters}
          handleFilterClick={handleFilterClick}
        />
      </div>
    )
  }
}
