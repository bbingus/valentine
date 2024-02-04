"use client";

import { useState } from "react";
import Image from "next/image";
import bearKiss from "../assets/bear-kiss-bear-kiss.gif";
import shyCat from "../assets/erm-mochi.gif";

const phrases = [
  "No",
  "Are you sure?",
  "Pookie please",
  "Pretty please",
  "You're breaking my heart pookie",
  "I'm gonna cry...",
  "pls pls pls pls",
  "pls pls pls pls pls pls",
];

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <>
      <div className="body">
        <div className="valentine-container">
          {yesPressed ? (
            <>
              <Image src={bearKiss} alt="nyan cat" />
              <div className="text">YAY!!!</div>
            </>
          ) : (
            <>
              <Image src={shyCat} alt="shy cat" />
              <div>Will you be my valentine?</div>
              <div>
                <button
                  className="yes-button"
                  style={{
                    fontSize: yesButtonSize,
                    backgroundColor: "lightgreen",
                  }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="no-button"
                  style={{ backgroundColor: "lightcoral" }}
                >
                  {getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
