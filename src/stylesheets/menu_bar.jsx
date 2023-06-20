import './menu_bar.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'

import M_MenuBut from './components_react/M_MenuBut/M_MenuBut.jsx'

const root = createRoot(document.querySelector('.S_MenuB'))
root.render(<M_MenuBut />)
