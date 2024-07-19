import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({content, route}) => {
  return (
      <li className=''><NavLink to={route} className={li-link}></NavLink >{ content }</li>
  )
}
