import React from 'react'
import memesData from '../memesData';
import { useState } from 'react';

function Form() {
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

function handleChange(event) {
  const {name, value} = event.target;

  setMeme(prevMeme => {
    return {
      ...prevMeme, 
      [name]: value
    }
  })
}



  return (
    <main>
  <div className='form'>
    
    <input 
    placeholder='Top Text'
    type="text" className='form--input'
    name="topText"
    value={meme.topText}
    onChange={handleChange}
    />
    <input 
    type="text" 
    className='form--input'
    placeholder='Bottom Text'
    onChange={handleChange}
    name="bottomText"
    value={meme.bottomText}/>
    
    

    
      <button className='form--button'
      onClick={randomMeme}>
        Get a new meme image
      </button>

      
   

   </div>

   <div className='meme'>
   <img 
      src={meme.randomImage}
      alt='meme image'
      className='meme--image'
      />
    <h2 className="meme--text top">{meme.topText}</h2>
    <h2 className="meme--text bottom">{meme.bottomText}</h2>
   </div>

    
    </main>
   
  )
}

export default Form;