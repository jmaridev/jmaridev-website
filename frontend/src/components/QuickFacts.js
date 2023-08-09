"use client";

import { useState } from "react";
import { Monoton, Poppins } from "next/font/google";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });

export default function QuickFacts({ facts = myFacts }) {
  const [factIndex, setFactIndex] = useState(0);

  // set factIndex to random number between 0 and facts.length
  function randomizeFact() {
    setFactIndex(Math.floor(Math.random() * facts.length));
  }

  return (
    <div className="w-full h-fit rounded-xl p-12 text-center flex flex-col place-items-center">
      <div className="relative w-fit">
        <h2
          className={`text-[50px] text-blue-500 whitespace-nowrap ${monoton.className}`}
        >
          QUICK FACTS
        </h2>
        <span className="absolute bottom-0 right-0 text-xs -rotate-6">
          &#40;about me&#41;
        </span>
      </div>
      <p className={poppinsBold.className}>{facts[factIndex].question}?</p>
      <p className="mb-4">{facts[factIndex].answer}</p>
      <button
        className="px-8 py-2 border-2 border-blue-500 rounded-xl text-blue-500 hover:border-blue-500 hover:text-white hover:bg-blue-500 transition-all"
        onClick={randomizeFact}
      >
        Next
      </button>
    </div>
  );
}

const myFacts = [
  {
    question: "Java Order ☕️",
    answer:
      "I like the basic mocha, but usually it's a specialty espresso drink I'm craving at the time.",
  },
  {
    question: "Pineapple on pizza 🍍🍕",
    answer: "I never thought I'd say this but, recently (early 2023), yes.",
  },
  {
    question: "Myth I believed",
    answer:
      "Chocolate milk came from cows. The day I found out was very... sad.",
  },
  {
    question: "Favourite videogame series of all time 🎮",
    answer:
      "The Ratchet and Clank series. I remember beating the first 3 games (4 including Deadlocked) countless times, maxing out all the weapons and game currency. Crack in Time and Rift Apart were also on another level.",
  },
  {
    question: "How I got into code 👨‍💻",
    answer:
      "In highschool, I thought my interest in video games meant I should become a game developer. Ended up taking a coding class (which taught Turing). What clicked with me was the satisfaction of finding a solution towards a problem.",
  },
  {
    question: "Favourite travel destination ✈️",
    answer:
      "Italy 🇮🇹. The country, architecture, and food is just amazing. A must visit 100%.",
  },
  {
    question: "Favourite programming language 🧑‍💻",
    answer:
      "Difficult choosing between Java and JavaScript, but probably because I use both the most. Java for backend, JavaScript for frontend. But if I had to choose one, it would be JavaScript because it's easier to set up.",
  },
  {
    question: "Favourite Computer Science course 📚",
    answer:
      "I would have to say Algorithms. The course was medium difficulty, but learning about the different algorithms and their time complexities was very interesting.",
  },
  {
    question: "Cats or dogs 🐱🐶",
    answer:
      "I'm a dog person! I would love to get a Samoyed, but I'm not sure if I can handle the shedding. Maybe I'll knit a sweater out of the fur.",
  },
  {
    question: "Favourite sport 🏀",
    answer:
      "I don't play sports often, but I like to play Volleyball. Does jump rope count? Because I'm pretty good at that.",
  },
  {
    question: "Choice of OS 💻",
    answer:
      "Honestly, I use all of them and enjoy all of them. Windows for games, Mac for development, and Linux for servers.",
  },
  {
    question: "Peripherals 🖱",
    answer:
      "I used to love bulky mechanical keyboards, but now I prefer a more minimalistic approach. I use the Logitech MX Keys and a quite mouse from Amazon. I got spoiled by my 2K 144hz monitor though, so I can't go back to 1080p 60hz. Definitely a game changer.",
  },
  {
    question: "Instrument I play 🎸",
    answer: "Guitar and drums, but recently I've been liking the drums more.",
  },
  {
    question: "Music I listen to 🎧",
    answer: "Literally anything. Depends on my mood.",
  },
  {
    question: "Ice cream flavour 🍦",
    answer: "PISTACHIOOOOOOOO GELATOOOOOOOO!!!!",
  },
  {
    question: "Dark mode or light mode 🌓",
    answer: "If you use light mode, please see a doctor.",
  },
  {
    question: "Favourite anime 📺",
    answer:
      "I've passed my weeb phase, but I can still say that my favourite animes are Code Geass and Soul Eater.",
  },
  {
    question: "Apple or Android 📱",
    answer: "I've converted to the dark side. Apple it is.",
  },
  {
    question: "Favourite dessert 🍰",
    answer: "Creme brulee. I love burnt sugar. Has to be that or bingsu.",
  },
  {
    question: "Choice of weapon ⚔️",
    answer:
      "Some sort of lightsaber or phaseblade. They can also be used as flashlights. Do they use batteries?",
  },
  {
    question: "Preferred Social Media 📱",
    answer:
      "Discord probably. Went from Skype, to Curse Voice, to Discord. Discord calls and screen sharing was a game changer. If you're talking social media platforms, then Twitter (or X, is what it was changed to 😔).",
  },
  {
    question: "Boba order 🧋",
    answer:
      "Super basic, just a taro slush with pearls. And if I'm feeling dangerous, I'll get pudding.",
  },
  {
    question: "Summer or Winter 🌞❄️",
    answer:
      "Winter, just because I like to sleep in the cold. And if I need it to be hot, my computer will do the job.",
  },
  {
    question: "Favourite mode of transportation 🚗",
    answer:
      "I like all modes. Driving is fun, transit I don't need to focus, and walking or biking is just relaxing.",
  },
  {
    question: "Early bird or night owl 🦉",
    answer:
      "I have phases, but I've recently decided not to think about it too much. I always find myself up working late at night, so I guess I'm a night owl.",
  },
  {
    question: "Favourite IDE 💻",
    answer:
      "VS Code and IntelliJ just because I use them the most. Not a huge Vim user, I'd rather use Nano.",
  },
  {
    question: "Favourite number 🔢",
    answer: "2.",
  },
  {
    question: "Favourite colour 🎨",
    answer:
      "I always think red, but I feel like that might have changed. Haven't really thought about it.",
  },
  {
    question: "y = mx + b or y = ax^2 + bx + c 📈",
    answer: "You already know we love PARABOLAS.",
  },
  {
    question: "d/dx or ∫ 📐",
    answer:
      "Neither. Honestly not a big calculus fan, but I like the concept of rate of change especially when it's applied in physics (acceleration, velocity, speed). d/dx it is.",
  },
  {
    question: "C++ or C# 🖥",
    answer:
      "I like C# more. It was the first language I leanred, mainly because of Unity. I loved creating games with it.",
  },
  {
    question: "Laptop or desktop 💻",
    answer: "Desktop for gaming, laptop for development.",
  },
  {
    question: "React, Angular, or Vue ⚛️",
    answer: "After using all 3, React is my favourite.",
  },
  {
    question: "Backend or frontend 🖥",
    answer:
      "I like both, but frontend is fun to work with, especially once you master CSS.",
  },
];
