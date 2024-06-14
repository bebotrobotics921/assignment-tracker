import { Assignment } from "../Assignment";
import { TAssignment } from "../../App";
import styles from "./assignments.module.css";

type Props ={
  assignments: TAssignment[]
}

export function Assignments({assignments}: Props) {
  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
          <div>
            <p>Created Assignments</p>
            <span>1</span>
          </div>

          <div>
            <p className={styles.textPurple} >Completed Assignments</p>
            <span>1 of 1</span>
          </div>
      </header>
      
        <div className={styles.list}>
        
          {assignments.map(assignment => (
            <Assignment id={assignment.id} assignments={assignment.task} completed={assignment.completed}/>
          ))}
            
        </div>
    </section>
  );
}

