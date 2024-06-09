import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";


export function Assignment({assignList}:{assignList: any}, {setAssignList}:{setAssignList:any}) {
  
  

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      
      <p></p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

