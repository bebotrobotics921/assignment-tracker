import styles from "./header.module.css";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react';

export function Header() {
  const [assignments, setAssignments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAssignments('');
  }

 
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>

        <input placeholder="Add a new assignment" 
              type="text" 
              value={assignments} 
              onChange={(e) => setAssignments(e.target.value)}/>

        <button  disabled={assignments===''}>
          Create
        </button>
      </form>
    </header>
  );
}

