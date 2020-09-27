import React from "react";
import Confetti from "react-dom-confetti";

const COLOR_MAP = {
  boy: [
    "#9CC5F0", "#4061D6", "#539EEE", "#40B0D6", "#417CBA", "#BFCBED", "#5769A0", "#023059", "#D5E5F2", "#0090FF",
  ],
  girl: [
    "#FF845C", "#E86354", "#FF697F", "#E854B4", "#F25CFF", "#FB8CAA", "#A6606D", "#F29999", "#E04059", "#F2BDBD",
  ],
};

export default function GenderDisplay({ gender }) {
  const config = {
    angle: 360,
    spread: 360,
    startVelocity: 40,
    elementCount: 400,
    dragFriction: 0.12,
    duration: 20000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: COLOR_MAP[gender],
  };
  const text = `It's a ${gender}!`;
  const chineseText = `宝宝是${gender === "boy" ? "男孩" : "女孩"}！`;
  return (
    <div>
      {gender && (
        <>
          <p
            className={`gender-text ${
              gender === "boy" ? "gender-text-boy" : "gender-text-girl"
            }`}
          >
            {text.split("").map((l) => (
              <span>{l}</span>
            ))}
          </p>
          <p
            className={`gender-text ${
              gender === "boy" ? "gender-text-boy" : "gender-text-girl"
            }`}
          >
            {chineseText.split("").map((l) => (
              <span>{l}</span>
            ))}
          </p>
        </>
      )}
      <Confetti className="confetti" active={!!gender} config={config} />
    </div>
  );
}
