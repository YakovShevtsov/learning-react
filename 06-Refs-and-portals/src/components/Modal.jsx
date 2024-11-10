import { useRef } from "react";
import React from "react";

const Modal = React.forwardRef(({ result, targetTime }, ref) => {
  return (
    <dialog
      className="result-modal"
      ref={ref}
    >
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X</strong> seconds left.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;
