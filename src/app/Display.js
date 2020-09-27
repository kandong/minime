import React, { useState, useCallback } from "react";
import Countdown from "./Countdown";
import GenderDisplay from "./GenderDisplay";

const COUNTDOWN_SECONDS = 10;

export default function Display({ baby }) {
  const [gender, setGender] = useState("");
  const [startCountdown, setStartCountdown] = useState(false);
  const [hideReveal, setHideReveal] = useState(false);
  const onButtonClick = useCallback(() => {
    setStartCountdown(true);
    setHideReveal(true);
  }, []);

  const reveal = useCallback(() => {
    setStartCountdown(false);
    const getData = async function () {
      const doc = await baby.get();
      setGender(doc.data()?.gender.toLowerCase());
    };
    getData();
  }, [baby]);

  return (
    <div className="container">
      {!hideReveal && (
        <div className="text-container">
          <h1 className="question-text">
            What's cooking?
            <br/>男孩还是女孩？
          </h1>
          <button className="reveal-btn" onClick={onButtonClick}>
            Reveal
            <br/>揭秘
          </button>
        </div>
      )}
      {startCountdown && (
        <Countdown initialCount={COUNTDOWN_SECONDS} onCountdownEnd={reveal} />
      )}
      <GenderDisplay gender={gender} />
    </div>
  );
}
