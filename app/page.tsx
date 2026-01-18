"use client";

import { useFlashcardGame } from "../hooks/useFlashcardGame";
import { mockFlashcards } from "../lib/data";
import Flashcard from "../components/Flashcard";
import GameControls from "../components/GameControls";
import Summary from "../components/Summary";

export default function Home() {
  const {
    currentCard,
    isFlipped,
    isFinished,
    stats,
    flip,
    handleAnswer,
    restart,
  } = useFlashcardGame(mockFlashcards);

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col items-center py-20 px-4">
      
      {/* Retro Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-stone-900 mb-4 tracking-tighter" style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}>
          FLASHCARD QUIZ
        </h1>
        <div className="h-2 w-full bg-stone-900 rounded-full"></div>
        
        {!isFinished && (
            <div className="mt-4 font-mono font-bold text-stone-500 bg-stone-200 inline-block px-4 py-2 rounded border-2 border-stone-300">
                SCORE: {stats.correctAnswers} / {stats.totalQuestions}
            </div>
        )}
      </header>


      <div className="flex flex-col items-center justify-center w-full max-w-2xl">
        {!isFinished ? (
          <>
            {currentCard && (
              <Flashcard
                card={currentCard}
                isFlipped={isFlipped}
                onFlip={flip}
              />
            )}
            <GameControls onAnswer={handleAnswer} disabled={!isFlipped} />
          </>
        ) : (
          <Summary 
            stats={stats} 
            onRestart={() => restart(false)} 
            onRestartWithMissed={() => restart(true)}
          />
        )}
      </div>
    </main>
  );
}
