import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useState } from 'react';

type Props = {
  id: string;
  assignment: string;
  completed: boolean;
}

export function Assignment({ assignment, completed }: Props) {
  const [assignments, setAssignments] = useState<Props[]>([]);
  
  const handleDelete = (id: string) => {
    setAssignments((assignments).filter(assignment=> assignment.id !== id));
  }

  const toggleComplete = (id: string) => {
    console.log(id)
    setAssignments(assignments.map((assignment)=> 
      assignment.id === id ? {...assignment, completed: !completed} : assignment
    )
    );
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}  >
        <div >  
          <IoMdCheckmarkCircle /> 
        </div>
      </button>
     
      <p className={completed ? styles.textCompleted : ""}>{assignment}</p>
   
      <button className={styles.deleteButton}  >
        <TbTrash size={20} onClick={()=> handleDelete(assignment)}/>
      </button>
    </div>
  );
}