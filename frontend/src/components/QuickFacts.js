"use client";

import { useState } from "react";

export default function QuickFacts({
  facts = [
    { question: "Java Order", answer: "Mocha." },
    { question: "Pineapple on pizza", answer: "Recently, yes." },
    { question: "Myth I believed?", answer: "Chocolate milk came from cows." },
  ],
}) {
  const [factIndex, setFactIndex] = useState(0);

  // set factIndex to random number between 0 and facts.length
  function randomizeFact() {
    setFactIndex(Math.floor(Math.random() * facts.length));
  }

  return (
    <div className="w-full h-fit">
      <span className="block">QUICK FACTS</span>
      <span className="block">{facts[factIndex].question}?</span>
      <span className="block">{facts[factIndex].answer}</span>
      <button onClick={randomizeFact}>Next</button>
    </div>
  );
}
