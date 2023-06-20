import './S_SearchContent.scss'
import React from 'react'
import { getPostTeasers } from '../../search_data.js'

import M_PostTeaser from '../M_PostTeaser/M_PostTeaser.jsx'
import M_FilterButtonZodiak from '../M_FilterButtonZodiak/M_FilterButtonZodiak.jsx'

export default class S_SearchContent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderPostTeasers = () => {
    const { filters, postTeasers } = this.props
    let { searchInputValue } = this.props

    console.log(postTeasers.length)

    searchInputValue = searchInputValue.toLowerCase()

    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm

    const searchedPosts = []
    const filteredMapPosts = []
    let filteredZodiakPosts = []

    const posts = []

    postTeasers.forEach((postTeaser) => {
      const title = postTeaser.title
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      if (searchInputValue != '') {
        if (title.includes(searchInputValue)) {
          searchedPosts.push(postTeaser)
        }
      } else {
        searchedPosts.push(postTeaser)
      }
    })

    // console.log('searchedPosts', searchedPosts)

    if (filters.map == 'none' && filters.zodiak == 'none') {
      filteredZodiakPosts = searchedPosts
    } else {
      searchedPosts.forEach((searchedPost) => {
        if (filters.map == 'none') {
          filteredMapPosts.push(searchedPost)
        } else {
          if (searchedPost.map[0].toLowerCase() === filters.map) {
            filteredMapPosts.push(searchedPost)
          }
        }
      })

      // console.log('filteredMapPosts', filteredMapPosts)

      filteredMapPosts.forEach((filteredMapPost) => {
        if (filters.zodiak == 'none') {
          filteredZodiakPosts.push(filteredMapPost)
        } else {
          if (filteredMapPost.zodiak[0].toLowerCase() === filters.zodiak) {
            filteredZodiakPosts.push(filteredMapPost)
          }
        }
      })
    }

    // console.log('filteredZodiakPosts', filteredZodiakPosts)

    filteredZodiakPosts.forEach((postTeaser, i) => {
      posts.push(<M_PostTeaser {...postTeaser} key={i} />)
    })

    console.log(filteredZodiakPosts)
    // console.log(filters, filters.map == 'none')

    return posts
  }

  render() {
    return <div className="S_SearchContent">{this.renderPostTeasers()}</div>
  }
}
