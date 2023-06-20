import './M_FilterButtonMap.scss'
import React from 'react'
import A_FilterButton from '../A_FilterButton/A_FilterButton.jsx'

export default class M_FilterButtonMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filters, handleFilterClick } = this.props

    return (
      <div className="M_FilterButtonMap">
        <A_FilterButton
          text="южное небо"
          // disabled={southSelected}
          active={filters.map === 'south'}
          handleClick={() => handleFilterClick('map', 'south')}
        />

        <A_FilterButton
          text="северное небо"
          // disabled={northSelected}
          active={filters.map === 'north'}
          handleClick={() => handleFilterClick('map', 'north')}
        />
      </div>
    )
  }
}
