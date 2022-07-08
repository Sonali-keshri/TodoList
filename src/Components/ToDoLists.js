import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import {IconContext} from "react-icons";

function ToDoLists(props) {
    
    
  return (

    <div className='list_box' >
        <li key={props.id}>{props.item}</li>
        <IconContext.Provider value={{ className:"icons edit-icon"}}>
            <BiEdit onClick={()=>{props.editItem(props.id)}}/>
        </IconContext.Provider>
        <IconContext.Provider value={{ className:"icons del-icon "}}>
            <MdDeleteForever onClick={()=>{props.deleteItem(props.id)}} />
        </IconContext.Provider>
    </div>
  )
};


export default ToDoLists;
