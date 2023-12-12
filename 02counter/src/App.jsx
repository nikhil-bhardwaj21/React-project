import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 21;
  const addValue = () => {
    // counter = counter + 1;
    // console.log("Value Added", counter);
    setCounter(counter + 1);
  };

  // const removeValue = () => {
  //   // counter = counter - 1;
  //   const a = setCounter(counter - 1);
  //   if (a < 0) {
  //     alert("Your are not in  - Value");
  //   } else {
  //   }
  // };

  const removeValue = () => {
    setCounter((prevCounter) => {
      const updatedCounter = prevCounter - 1;

      if (updatedCounter < 0) {
        alert("You are in negative territory!");
      } else {
        // Do your work here with the updated counter value
        // For example, update some state or perform some other action
      }

      return updatedCounter;
    });
  };

  return (
    <>
      <h1>Counter Poject</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
