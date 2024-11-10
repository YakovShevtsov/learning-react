import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(({ result, targetTime }, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  return (
    <dialog
      className="result-modal"
      ref={modalRef}
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
