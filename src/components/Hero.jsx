import React from 'react'
import '../styles/index.scss';

const Hero = () => {
  return (
    <div id='accueil'>
      <div className="container">
        <img src="./images/hero.png" alt="" />
        <img src="./images/bg-noise.png" alt="" />
        <div className="content">
          <h1 className="title">
            Axion Consulting
          </h1>
          <p className="subtitle">
            Transformez votre business avec le digital.
          </p>
          <a href="#" className='primary-btn'> Réserver un appel</a>
        </div>
        <p className="tag">
          Découvrir nos services
          <span></span>
        </p>
      </div>
    </div>
  )
}

export default Hero