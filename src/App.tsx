import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

export type TAssignment = {
  id: number;
  task: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([
   
  ]);
  
  return (
    <>
      <Header setAssignments={setAssignments}/>
      <Assignments assignments={assignments}/>
      
    </>
  );
}

export default App;
