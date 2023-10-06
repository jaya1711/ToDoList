import React, { useState } from 'react'
// import '../App.css'
import './MainComponent.css'
function InputTodo(props) {

const [inputText,setInputText]=useState('') ;

const handleEnterPress = (e)=>{
  if(e.keyCode===13){
      props.addList(inputText)
      setInputText("")
  }
}
  return (
    <div className="input-container">
        <input type ="text"  className='input-box-todo' placeholder="Enter your todo" value={inputText} onChange={e=>{setInputText(e.target.value)}} onKeyDown={handleEnterPress}> 
        </input>
        <button className='add-btn' onClick={()=>{
        props.additem(inputText)
        setInputText("")
      }}>+</button>
        
        </div>
  )
}

export default InputTodo