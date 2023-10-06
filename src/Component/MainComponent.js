
import React, {useState}from 'react'
import InputTodo from './Input'
import './MainComponent.css'
import DeletingList from './DeletingList'
function MainComponent() {


    const [todolist,settodolist]=useState([]);

    let additem=(inputText)=>{
        if(inputText!=='')
        settodolist([...todolist,inputText]);
    }

    const deleteListItem = (key)=>{
        let newListTodo = [...todolist];
        newListTodo.splice(key,1)
        settodolist([...newListTodo])
      }

      

  return (
      <div className='main-containe'>
        <span style={{color: "white", fontFamily:'cursive', fontSize:'50px'}}> ....TO DO LIST....</span><br/><br/>
    <center><div className='center-container'>

        <InputTodo additem={additem}/>
    <h1 className="app-heading">Works to DO</h1>
        <hr/>
       
        {todolist.map((item,i)=>{return <DeletingList key={i} index={i} item={item} deleteItem={deleteListItem}/> })}

       </div> </center> 

    </div>
    

  )
}

export default MainComponent