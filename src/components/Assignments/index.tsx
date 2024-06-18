import { Assignment } from "../Assignment";
import { TAssignment } from "../../App";
import styles from "./assignments.module.css";
import { useState } from 'react';

type Props ={
  assignments: TAssignment[]
  setAssignments: any;
  
}
export function Assignments({assignments, setAssignments}: Props) {
  
  const [counter, setCounter] = useState(0)
 
  
  const createdAssignments = assignments.length

  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
          <div>
            <p>Created Assignments</p>
            <span>{createdAssignments}</span>
          </div>

          <div>
            <p className={styles.textPurple} >Completed Assignments</p>
            <span>{counter} of {createdAssignments}</span>
          </div>
      </header>
      
        <div className={styles.list}>
        
          {assignments.map((assignment) => (
            <Assignment id={assignment.id} 
              assignment={assignment.task} 
              completed={assignment.completed}
              setAssignments={setAssignments}
              counter={counter}
              setCounter={setCounter}
              />
          ))}
            
        </div>
    </section>
  );
}