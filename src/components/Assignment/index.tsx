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
    alert("clicked")
    setAssignments(assignments.filter((assignment)=> assignment.id !== id));
    
  }

  const toggleComplete = (id: string) => {
    setAssignments(assignments.map((assignment)=> 
      assignment.id === id ? {...assignment, completed: !completed} : assignment
    )
    );
  }
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={()=> toggleComplete(assignment)}>
        <div >
        </div>  
      </button>
     
      <p className={`${completed ? styles.textCompleted : ""}`}>{assignment}</p>
   
      <button className={styles.deleteButton} onClick={()=> handleDelete(assignment)} >
        <TbTrash size={20}/>
      </button>
    </div>
  );
}