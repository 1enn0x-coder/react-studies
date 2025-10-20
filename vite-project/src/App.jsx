import { useState } from "react";
import CounterButton from "./components/CounterButton"

function App() {
 const ProjectName = "clicker-game"
 const [counter , setCounter] = useState(0);



  return (
    <>
   <h1>{ProjectName}</h1>
   <h1>{counter}</h1>

    <CounterButton title={"increase"} handleclick={()=> {
      setCounter(counter + 1)
    }}></CounterButton>

      <CounterButton title={"decrease"} handleclick={()=> {
      setCounter(counter - 1)
    }}></CounterButton>
    </>
  )
}

export default App;
