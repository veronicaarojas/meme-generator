import React from 'react'
import { useState, useEffect } from 'react';

function Form() {
  const [ meme, setMeme ] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });
  const [allMemes, setAllMemes] = useState([]);

useEffect(() => {
fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data => setAllMemes(data.data.memes))
}, []);

function randomMeme() {
  const randomNumber = Math.floor(Math.random() * allMemes.length);
  const { url } = allMemes[randomNumber];
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