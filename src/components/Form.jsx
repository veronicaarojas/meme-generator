import React from 'react'
import memesData from '../memesData';
import { useState } from 'react';

function Form() {
  // const [ memeImage, setMemeImage ] = useState("");
  const [ meme, setMeme ] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

function randomMeme() {
  const randomNumber = Math.floor(Math.random() * allMemeImages.length);
  const { url } = allMemeImages[randomNumber];
  setMeme(prevMeme => ({
    ...prevMeme, 
    randomImage: url
  }))
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
      src={meme.randomImage}
      alt='meme image'
      className='meme--image'
      />
   

   </div>
    </main>
   
  )
}

export default Form;