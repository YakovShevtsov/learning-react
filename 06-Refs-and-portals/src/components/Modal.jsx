import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(
  ({ targetTime, remainingTime, onResetChallenge }, ref) => {
    const modalRef = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          modalRef.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog
        className="result-modal"
        ref={modalRef}
        onClose={onResetChallenge}
      >
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with <strong>{formattedRemainingTime}</strong>{" "}
          seconds left.
        </p>
        <form
          method="dialog"
          onSubmit={onResetChallenge}
        >
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default Modal;
