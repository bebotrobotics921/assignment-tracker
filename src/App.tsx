import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

function App() {
 const [ assignList, setAssignList ] = useState('');
 
  return (
    <>
      <Header assignList={assignList}/>
      <Assignments assignList={assignList} {...setAssignList} 
                />
      
    </>
  );
}

export default App;
