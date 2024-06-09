import styles from "./header.module.css";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react';

export function Header( {assignList}:{assignList:any}, {setAssignList}:{setAssignList:any}) {
  const [inputValue, setInputValue] = useState('');
  

  const handleChange =(e: any) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInputValue("");
    
  }

  const addTitle = (inputValue: any) => {
    assignList=[...assignList, {id: assignList.length + 1, title: inputValue, complete: false}];
    setAssignList(assignList);
  }
  
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} >

        <input placeholder="Add a new assignment" 
              type="text" 
              value={inputValue} 
              onChange={handleChange}/>

        <button  onClick={handleSubmit} disabled={inputValue.length === 0} onChange={addTitle}>
          Create
        </button>
      </form>
    </header>
  );
}

