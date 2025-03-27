import React from 'react'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <ul className="container">
        <li>
          <a href="#" className='navlink'>Accueil</a>
          <a href="#" className='navlink'>À propos</a>
          <a href="#" className='navlink'>Services</a>
          <a href="#" className='navlink'>Témoignages</a>
          <a href="#" className='navlink'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar