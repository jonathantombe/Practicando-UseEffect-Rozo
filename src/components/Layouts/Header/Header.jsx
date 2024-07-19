import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../Ul/ItemNavbar/ItemNavbar'

export const Header = () => {
  return (
      <header>
          <Navbar>
              <ItemNavbar content='/Click Couter' />
              <ItemNavbar content='Digital Clock' />
              <ItemNavbar content='Login' />
              <ItemNavbar content='Timer'/>
          </Navbar>
    </header>
  )
}
