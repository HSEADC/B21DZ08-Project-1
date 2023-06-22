import './searchfilter.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { getSearchRequest } from './utilities.js'

import W_MythologyContent from './components/W_MythologyContent/W_MythologyContent.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.W_Mythology'))
  root.render(<W_MythologyContent searchInputValue={getSearchRequest()} />)
})
