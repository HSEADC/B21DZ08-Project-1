import './W_MythologyContent.scss'
import classnames from 'classnames'
import React from 'react'
import { getPostTeasers } from '../../search_data.js'

import { getSearchRequest } from '../../utilities.js'
import M_PostTeaser from '../M_PostTeaser/M_PostTeaser.jsx'
import S_SearchContent from '../S_SearchContent/S_SearchContent.jsx'
import S_SearchFilterBar from '../S_SearchFilterBar/S_SearchFilterBar.jsx'

export default class W_MythologyContent extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props
    const { activeButton } = props
    // const { activeButton } = props
    console.log(searchInputValue)

    this.state = {
      postTeasers: [],
      searchInputValue,
      filters: {
        map: 'none',
        zodiak: 'none'
      }
    }
  }

  handleZodiakClick = () => {
    this.setState(
      {
        activeZodiak: true,
        activeNotZodiak: false
      },
      this.handleZodiakFilterChange
    )
  }

  handleNotZodiakClick = () => {
    this.setState(
      {
        activeZodiak: false,
        activeNotZodiak: true
      },
      this.handleZodiakFilterChange
    )
  }
  // onFilterChange = (activeButton) => {
  //   this.setState({ activeButton })
  // }

  handleZodiakFilterChange = () => {
    const { activeZodiak, activeNotZodiak } = this.state
    const activeButton = activeZodiak
      ? 'Zodiak'
      : activeNotZodiak
      ? 'NotZodiak'
      : 'None'

    this.setState({ activeButton })
  }

  // handleFilterChange = (activeButton) => {
  //   this.setState({ wrapperActiveButton: activeButton })
  // }
  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
      // console.log(data)
    })
  }

  handleFilterClick = (type, id) => {
    console.log('filter clicked', type, id)

    const filters = Object.assign({}, this.state.filters)

    if (type === 'all' && id === 'none') {
      filters.map = 'none'
      filters.zodiak = 'none'
    } else if (type === 'map') {
      filters.map = id
    } else if (type === 'zodiak') {
      filters.zodiak = id
    }

    this.setState({ filters })
  }

  render() {
    const {
      postTeasers,
      isSearchButtonDisabled,
      searchInputValue,
      handleSearchInput,
      handleSearchSubmit,
      filters
    } = this.state

    return (
      <div className="W_MythologyContent">
        <S_SearchFilterBar
          isSearchButtonDisabled={isSearchButtonDisabled}
          postTeasers={postTeasers}
          handleSearchInput={handleSearchInput}
          handleSearchSubmit={handleSearchSubmit}
          searchInputValue={getSearchRequest()}
          filters={filters}
          handleFilterClick={this.handleFilterClick}
        />

        <S_SearchContent
          filters={filters}
          searchInputValue={getSearchRequest()}
          postTeasers={postTeasers}
        />
      </div>
    )
  }
}
