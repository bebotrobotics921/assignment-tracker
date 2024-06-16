import { Assignment } from "../Assignment";
import { TAssignment } from "../../App";
import styles from "./assignments.module.css";


type Props ={
  assignments: TAssignment[]
}
export function Assignments({assignments}: Props) {
  
  const completedAssignments = assignments.filter((assignment)=> assignment.completed).length
  const totalAssignments = assignments.length

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
          <div>
            <p>Created Assignments</p>
            <span>{totalAssignments}</span>
          </div>

          <div>
            <p className={styles.textPurple} >Completed Assignments</p>
            <span>{completedAssignments} of {totalAssignments}</span>
          </div>
      </header>
      
        <div className={styles.list}>
        
          {assignments.map((assignment) => (
            <Assignment id={assignment.id} assignment={assignment.task} completed={assignment.completed} />
          ))}
            
        </div>
    </section>
  );
}