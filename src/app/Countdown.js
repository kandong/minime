import React, { useState, useEffect } from "react";

export default function Countdown({
  initialCount = 10,
  onCountdownEnd = () => {},
}) {
  const [counter, setCounter] = useState(initialCount);
  useEffect(() => {
    if (counter === 0) {
      return onCountdownEnd();
    }
    setTimeout(() => {
      setCounter((s) => s - 1);
    }, 1000);
  }, [counter, onCountdownEnd]);
  return (
    <p
      className={`counter ${
        counter % 2 === 0 ? "gender-text-girl" : "gender-text-boy"
      }`}
    >
      {counter ? counter : ''}
    </p>
  );
}
