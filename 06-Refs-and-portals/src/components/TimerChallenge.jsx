import { useState, useRef } from "react";
import Modal from "./Modal";

export default function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timer = useRef();
  const modal = useRef();

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    modal.current.open();
  }

  function resetChallengeHandler() {
    setRemainingTime(targetTime * 1000);
  }

  function startChallengeHandler() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function stopChallengeHandler() {
    modal.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <Modal
        remainingTime={remainingTime}
        targetTime={targetTime}
        ref={modal}
        onResetChallenge={resetChallengeHandler}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={
              timerIsActive ? stopChallengeHandler : startChallengeHandler
            }
          >
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
