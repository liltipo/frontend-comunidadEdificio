import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  
  return (
    <nav className='nav-bar'>
      {/* Inicio a la izquierda */}
      <NavLink className={navLinkClass} to='/'>
      <FontAwesomeIcon icon={faHouse} size="sm" style={{ marginRight: '10px' }} />
        Inicio
      </NavLink>

      {/* Enlaces a la derecha */}
      <div className='nav-bar__right-links'>
        <NavLink className={navLinkClass} to='/reservas'>
          Reservas
        </NavLink>
        <NavLink className={navLinkClass} to='/boletin'>
          Boletín
        </NavLink>
        <NavLink className={navLinkClass} to='/GGCC'>
          GGCC
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
