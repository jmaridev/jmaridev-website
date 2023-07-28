"use client";

import { useState } from "react";
import { Monoton } from "next/font/google";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

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
    <div className="w-full h-fit rounded-xl p-12 text-center flex flex-col place-items-center">
      <div className="relative w-fit">
        <h2
          className={`text-[50px] text-rose-500 whitespace-nowrap ${monoton.className}`}
        >
          QUICK FACTS
        </h2>
        <span className="absolute bottom-0 right-0 text-xs -rotate-6">
          &#40;about me&#41;
        </span>
      </div>
      <p>{facts[factIndex].question}?</p>
      <p className="mb-4">{facts[factIndex].answer}</p>
      <button
        className="px-8 py-2 border-2 border-rose-500 rounded-xl text-rose-500 hover:border-rose-500 hover:text-white hover:bg-rose-500 transition-all"
        onClick={randomizeFact}
      >
        Next
      </button>
    </div>
  );
}
