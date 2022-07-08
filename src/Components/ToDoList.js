import React,{useState} from 'react';
import ToDoLists from './ToDoLists';
import { BiEdit } from "react-icons/bi";
import {IconContext} from "react-icons";


const ToDoList=()=> {
  const [inputItem, setinputItem] = useState('');
  const [itemList, setitemList] = useState([]);
  const [togglebtn, setToggleBtn ]= useState(true);
  const [selctedItemId , setSelectedItemId] = useState(null);
  


  const itemEvent =(event)=>{
    setinputItem(event.target.value);

  };
  
  const addItemBtn =()=>{
    if(!inputItem){
      alert("Please enter Something to add in the List!")
    }
    else if(inputItem && !togglebtn){
      setitemList(
        [...itemList].map((elem) =>{
          if(elem.id === selctedItemId){
            elem.inputValue = inputItem;
          }
          return elem;
        }))
          setToggleBtn(true);
          setinputItem('');
          setSelectedItemId(null);
    }
    else{
      const allInputData = {id: new Date().getTime().toString(), inputValue: inputItem}
      setitemList( [...itemList, allInputData])
       setinputItem('');
    }
  }
  const deleteItem = (id) =>{
        setitemList(itemList.filter((curritem) => {
            return curritem.id !== id;
          }))
        }
  
  const editItem = (id) =>{
    let newEditItem = itemList.find((elem) =>{
      return elem.id === id;
    });
    console.log(newEditItem);
    setToggleBtn(false);
    console.log(togglebtn)
    setinputItem(newEditItem.inputValue);
    setSelectedItemId(newEditItem.id);
    console.log(selctedItemId)

  }

  const removeAll = ()=>{
    setitemList([]);
  }



  return (
        <>
        <h1>ToDo List</h1>
        <div className='inputArea'>
        <input placeholder='Add a items' type='text' value={inputItem} onChange={itemEvent}/>
        <div>
        {togglebtn ? <button title= "Add Item" className="addBtn" onClick={addItemBtn} >+</button>
        :<IconContext.Provider value={{ className:" editSubmitBtn"}}>
            <BiEdit onClick={addItemBtn} title= "Edit Item"/>
        </IconContext.Provider>}
        </div>
        </div>
        
        <ol > 
              {itemList.map((item) =>{  
                  return <ToDoLists item={item.inputValue} 
                  key={item.id} 
                  id={item.id}
                  deleteItem={deleteItem}
                  editItem={editItem}

                  /> 
                })};
        </ol>
        <button onClick={removeAll} className="removeAllbtn">Remove All</button>     
        </>
  )
};

export default ToDoList;
