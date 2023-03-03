import React from 'react'
import grid from '../images/photo-grid.png'

function Hero() {
  return (
    <section className='hero'>
        <img src={grid}  alt='photo-grid' className='hero--grid'/>
        <h1 className='hero--header'>Online Experiences</h1>
        <h3 className='hero--text'>Join unique interactive activities led by one of a kind hosts- all without leavibg home.</h3>
    </section>
  )
}

export default Hero