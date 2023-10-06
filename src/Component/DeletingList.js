import React from 'react'
import './MainComponent.css'
function DeletingList(props) {
  return (
    <div><li className="list-item">
    {props.item}
    <span className='icons'>
    <i className="fa-solid fa-trash-can icon-delete fa-bounce " 
    onClick={e=>{
        props.deleteItem(props.index)
    }}></i>
    </span>
</li></div>
  )
}

export default DeletingList