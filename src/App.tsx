import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

export type TAssignment = {
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<TAssignment[] | []>([]);
  
  return (
    <>
      <Header />
      <Assignments assignments={assignments}  />
      
    </>
  );
}

export default App;
