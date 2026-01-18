"use client";

import { motion } from "motion/react";
import { Flashcard as FlashcardType } from "../lib/types";

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div
      className="perspective-1000 w-96 h-64 cursor-pointer group"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? "Flip to see question" : "Flip to see answer"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onFlip();
        }
      }}
    >
      <motion.div
        className="relative w-full h-full text-center transition-all transform-style-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-white border-4 border-stone-900 rounded-lg shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] p-6 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-stone-500 bg-stone-100 px-2 py-1 rounded border-2 border-stone-200">
            {card.category}
          </div>
          <h2 className="text-2xl font-bold font-mono text-stone-900 leading-tight">
            {card.question}
          </h2>
          <div className="absolute bottom-4 text-xs text-stone-400 font-mono animate-pulse">
            [CLICK TO FLIP]
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-stone-100 border-4 border-stone-900 rounded-lg shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] p-6 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-stone-300 rounded p-4">
            <h2 className="text-xl font-bold font-mono text-stone-900">
              {card.answer}
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
