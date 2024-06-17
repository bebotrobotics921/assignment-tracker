import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from 'react';

type Props = {
  id: string;
  assignment: string;
  completed: boolean;
}

export function Assignment({ assignment, completed }: Props) {
  const [assignments, setAssignments] = useState<Props[]>([]);
  
  const handleDelete = (id: string) => {
    
    setAssignments(assignments.filter((assignment)=> assignment.id !== id));
    
  }

 
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} >
        <div >
        </div>  
      </button>
     
      <p className={`${completed ? styles.textCompleted : ""}`}>{assignment}</p>
   
      <button className={styles.deleteButton} onClick={()=> handleDelete} >
        <TbTrash size={20}/>
      </button>
    </div>
  );
}