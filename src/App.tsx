import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

export type TAssignment = {
  id: string;
  task: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([
    { id: "1", task: "study typescript", completed: false },
  ]);
  
  return (
    <>
      <Header setAssignments={setAssignments}/>
      <Assignments assignments={assignments} setAssignments={setAssignments}/>
      
    </>
  );
}

export default App;
