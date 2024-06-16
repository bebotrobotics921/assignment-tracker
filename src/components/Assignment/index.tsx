import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from 'react';

type Props = {
  id: number;
  assignments: string;
  completed: boolean;
}

export function Assignment({ id, assignments }: Props) {
  const [assignment, setAssignment] = useState<Props[]>([]);
  
  const handleDelete = (id: number) => {
    const updated = assignment.filter((assignments)=> assignments.id !== id);
    setAssignment(updated);
  }

  const toggleComplete = (id: number) => {
    const updated = assignment.map((assignment)=> {
      if(assignment.id === id) {
        return {...assignment, completed: !assignment.completed};
      }
      return assignment;
    });
    setAssignment(updated);
  }
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={()=> toggleComplete(id)}>
        <div >
        </div>  
      </button>
     
      <p  >{assignments}</p>
   
      <button className={styles.deleteButton} >
        <TbTrash size={20} onClick={()=> handleDelete(id)}/>
      </button>
    </div>
  );
}