import { useState, useRef } from "react";
import Modal from "./Modal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const modal = useRef();

  function startChallengeHandler() {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      modal.current.open();
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function stopChallengeHandler() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      <Modal
        result="Lost"
        targetTime={targetTime}
        ref={modal}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={
              timerStarted ? stopChallengeHandler : startChallengeHandler
            }
          >
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
