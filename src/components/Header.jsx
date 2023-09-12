import React from 'react'

function Header() {
  return (
   <header className='header'>
    <img
    className='header--image'
    height="30px"
    src='src/assets/troll-face.svg'/>
    <h2 className='header--title'>Meme Generator</h2>

    <h4 className='project--title'>React Course - Project 3</h4>
   </header>
  )
}

export default Header