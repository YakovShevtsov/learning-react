export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start/Stop challenge</button>
      </p>
      <p className="">Time is running / timer is active...</p>
    </section>
  );
}
