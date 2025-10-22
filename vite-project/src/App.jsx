import { useState } from "react";
import CounterButton from "./components/CounterButton";
import CounterDisplay from "./components/CounterDisplay";
import ProjectName from "./components/ProjectName";
import Message from "./components/Message";

function App() {
  const projectName = "clicker-game";
  const [counter, setCounter] = useState(0);

  return (
    <>
      <ProjectName name={projectName} />
      <CounterDisplay count={counter} />
      <Message count={counter} />

      <CounterButton
        title={"increase"}
        handleclick={() => {
          setCounter(counter + 1);
        }}
      ></CounterButton>

      <CounterButton
        title={"decrease"}
        handleclick={() => {
          setCounter(counter - 1);
        }}
      ></CounterButton>

            <CounterButton
        title={"reset"}
        handleclick={() => {
          setCounter(0);
        }}
      ></CounterButton>
    </>
  );
}

export default App;
