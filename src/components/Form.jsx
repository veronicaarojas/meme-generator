import React from 'react'

function Form() {
  return (
    <main>
  <form className='form'>
    
    <input 
    placeholder='Top Text'
    type="text" className='form--input'/>
    <input 
    type="text" 
    className='form--input'
    placeholder='Bottom Text'/>
    
    

    
      <button className='form--button'>
        Get a new meme image
      </button>
   

   </form>
    </main>
   
  )
}

export default Form;