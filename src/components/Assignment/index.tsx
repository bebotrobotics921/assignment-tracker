import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from 'react';

type Props = {
  id: number;
  assignments: string;
  completed: boolean;
}
export function Assignment({ assignments }: Props) {
  const [assignment, setAssignment] = useState();

  const handleCheckContainer = (id: number) => {
    setAssignment(
      assignments.map(assignment => {
        if(assignment.id === id) {
          return { ...assignment, completed: !assignment.completed};
        }
        return assignment;
      }),
    );
  };
  
  const handleDeleteButton = (id: number) => {
    setAssignment(assignments.filter(assignment => assignment.id !== id));
  };
  
  
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}  onClick={() => handleCheckContainer(assignment.id)}>  
      </button>
     
      <p >{assignment}</p>
   
      <button className={styles.deleteButton} onClick={() => handleDeleteButton(assignment.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

