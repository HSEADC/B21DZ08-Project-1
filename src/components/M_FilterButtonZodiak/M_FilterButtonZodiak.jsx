import './M_FilterButtonZodiak.scss'
import React from 'react'
import A_FilterButton from '../A_FilterButton/A_FilterButton.jsx'
// const activeButton = 'None'

export default class M_FilterButtonZodiak extends React.Component {
  constructor(props) {
    super(props)
  }

  // handleZodiakClick = () => {
  //   this.setState(
  //     {
  //       activeZodiak: true,
  //       activeNotZodiak: false
  //     },
  //     this.handleZodiakFilterChange
  //   )
  // }

  // handleNotZodiakClick = () => {
  //   this.setState(
  //     {
  //       activeZodiak: false,
  //       activeNotZodiak: true
  //     },
  //     this.handleZodiakFilterChange
  //   )
  // }
  // // onFilterChange = (activeButton) => {
  // //   this.setState({ activeButton })
  // // }

  // handleZodiakFilterChange = () => {
  //   const { activeZodiak, activeNotZodiak } = this.state
  //   const activeButton = activeZodiak
  //     ? 'Zodiak'
  //     : activeNotZodiak
  //     ? 'NotZodiak'
  //     : 'None'

  //   this.setState({ activeButton })
  // }

  render() {
    const { filters, handleFilterClick } = this.props

    return (
      <div className="M_FilterButtonZodiak">
        <A_FilterButton
          className="left"
          text="зодиакальные"
          active={filters.zodiak === 'zodiak'}
          handleClick={() => handleFilterClick('zodiak', 'zodiak')}
        />

        <A_FilterButton
          className="right"
          text="незодиакальные"
          active={filters.zodiak === 'notzodiak'}
          handleClick={() => handleFilterClick('zodiak', 'notzodiak')}
        />
      </div>
    )
  }
}
