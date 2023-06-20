import './S_SearchFilterBar.scss'
// import classnames from 'classnames'
import React from 'react'
import O_SearchBar from '../O_SearchBar/O_SearchBar.jsx'
import O_FilterBar from '../O_FilterBar/O_FilterBar.jsx'
import { getPostTeasers } from '../../search_data.js'

const addressPart = ':8080/'

export default class S_SearchFilterBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue
    }
  }

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  getPathFromUrl = (url) => {
    return url.split(addressPart)[0]
  }

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url +
        addressPart +
        'main_pages/mythology_react.html?request=' +
        searchInputValue
    }
  }
  render() {
    const { isSearchButtonDisabled, searchInputValue, postTeasers } = this.state
    const { handleFilterClick, filters } = this.props

    return (
      <div className="S_SearchFilterBar">
        <O_SearchBar
          isSearchButtonDisabled={isSearchButtonDisabled}
          searchInputValue={searchInputValue}
          postTeasers={postTeasers}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <O_FilterBar filters={filters} handleFilterClick={handleFilterClick} />
      </div>
    )
  }
}
