import { useState } from "react";

export default function Player() {
  const [userInput, setUserInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function changeUserNameHandler(event) {
    setSubmitted(false);
    setUserInput(event.target.value);
  }

  function submitUserNameHandler() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? userInput : "unknown entity"}!</h2>
      <p>
        <input
          type="text"
          value={userInput}
          onChange={changeUserNameHandler}
        />
        <button onClick={submitUserNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
