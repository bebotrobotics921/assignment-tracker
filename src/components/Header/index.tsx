import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { TAssignment } from "../../App";
import { useState } from 'react';


type Props ={
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
};

export const Header = ({ setAssignments }: Props) => {
  const [assignment, setAssignment] = useState<string>("");
  const isEmpty = assignment.length === 0; //derived state

  const handleCreateButton = (e: React.FormEvent) => {
    e.preventDefault();
    setAssignments((assignments) => {
      return [ 
        ...assignments, 
        { id: Date.now(), task: assignment, completed: false }
      ];
    });
  };

  
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateButton}>

        <input placeholder="Add a new assignment" 
              type="text" 
              value={assignment} 
              
              onChange={(e) => setAssignment(e.target.value)}/>

        <button  disabled={isEmpty}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

