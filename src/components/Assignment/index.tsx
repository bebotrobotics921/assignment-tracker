import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { useState } from 'react';

type Props = {
  id: string;
  assignment: string;
  setAssignments: any;
  completed: boolean;
  counter: any;
  setCounter: any;
}

export function Assignment({ assignment, setAssignments, completed: icomplete, counter, setCounter }: Props) {
  
  
  const [completed, setCompleted] = useState(icomplete);
  
  const handleDelete = (task: string) => {
    setAssignments((assignments: any) => {
      return assignments.filter((assignment:any)=> assignment.task !== task);
  });
}
  
const toggleComplete = () => {
  setCompleted(!completed);
  if (completed === false){
    setCounter(counter + 1);
  } else {
    return ""
  }
  
  
};
  
  

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={toggleComplete}>
        {completed? <IoMdCheckmarkCircle  /> : <FaRegCircle />}
        
      </button>
     
      <p className={completed ? styles.textCompleted : ""} >{assignment}</p>
   
      <button className={styles.deleteButton}  >
        <TbTrash size={20} onClick={()=> handleDelete(assignment)}/>
      </button>
    </div>
  );
}