import React from 'react'
import memesData from '../memesData';
import { useState } from 'react';

function Form() {
  const [ memeImage, setMemeImage ] = useState("");

function randomMeme() {
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const { url } = memesArray[randomNumber];
  setMemeImage(url);
}



  return (
    <main>
  <div className='form'>
    
    <input 
    placeholder='Top Text'
    type="text" className='form--input'/>
    <input 
    type="text" 
    className='form--input'
    placeholder='Bottom Text'/>
    
    

    
      <button className='form--button'
      onClick={randomMeme}>
        Get a new meme image
      </button>

      <img 
      src={memeImage}
      alt='meme image'
      className='meme--image'
      />
   

   </div>
    </main>
   
  )
}

export default Form;