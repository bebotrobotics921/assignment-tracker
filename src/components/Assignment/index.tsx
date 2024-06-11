import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment({assignments}:any) {
  
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>  
      </button>
     
      <p>{assignments.title}</p>
   
      
      

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
