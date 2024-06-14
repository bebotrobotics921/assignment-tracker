import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from 'react';

type Props = {
  id: number;
  assignments: string;
  completed: boolean;
}
export function Assignment({ id, assignments, completed }: Props) {
  const [assignment, setAssignment] = useState<string>("");


  

  
  
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} >  
      </button>
     
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{assignments}</p>
   
      <button className={styles.deleteButton} >
        <TbTrash size={20} />
      </button>
    </div>
  );
}

