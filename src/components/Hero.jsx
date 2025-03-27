import React from 'react'

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
          <a href="#services">Découvrir nos services</a>
          <span></span> {/* bar bottom*/}
        </p>
      </div>
    </div>
  )
}

export default Hero