import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function submitHandler() {
    setPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}!</h2>
      <p>
        <input
          type="text"
          ref={inputRef}
        />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
}
