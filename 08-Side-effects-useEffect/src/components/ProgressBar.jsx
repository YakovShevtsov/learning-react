import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [progressBarStatus, setProgressBarStatus] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBarStatus((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      value={progressBarStatus}
      max={timer}
    />
  );
}
