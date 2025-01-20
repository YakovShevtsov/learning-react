import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import CounterConfigure from "./components/Counter/CounterConfigure.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <CounterConfigure onSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
