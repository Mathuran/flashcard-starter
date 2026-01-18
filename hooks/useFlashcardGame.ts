import { useState } from 'react';
import { Flashcard, QuizStats } from '../lib/types';

interface UseFlashcardGameReturn {
  currentCard: Flashcard | undefined;
  currentIndex: number;
  isFlipped: boolean;
  isFinished: boolean;
  stats: QuizStats;
  direction: number;
  flip: () => void;
  handleAnswer: (correct: boolean) => void;
  restart: (onlyMissed?: boolean) => void;
}

export const useFlashcardGame = (cards: Flashcard[]): UseFlashcardGameReturn => {
  const [activeCards, setActiveCards] = useState<Flashcard[]>(cards);
  const [missedCards, setMissedCards] = useState<Flashcard[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  const [stats, setStats] = useState<QuizStats>({
    totalQuestions: cards.length,
    correctAnswers: 0,
    incorrectAnswers: 0,
    completed: false,
  });

  const currentCard = activeCards[currentIndex];
  const isFinished = currentIndex >= activeCards.length;

  const flip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleAnswer = (correct: boolean) => {
    if (!correct && currentCard) {
      setMissedCards((prev) => [...prev, currentCard]);
    }

    setIsFlipped(false);
    setDirection(1);

    setTimeout(() => {
      setStats((prev) => ({
        ...prev,
        correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
        incorrectAnswers: !correct ? prev.incorrectAnswers + 1 : prev.incorrectAnswers,
        completed: currentIndex === activeCards.length - 1,
      }));

      setCurrentIndex((prev) => prev + 1);
    }, 1000);
  };

  const restart = (onlyMissed: boolean = false) => {
    if (onlyMissed) {
      setActiveCards(missedCards);
      setStats({
        totalQuestions: missedCards.length,
        correctAnswers: 0,
        incorrectAnswers: 0,
        completed: false,
      });
    } else {
      setActiveCards(cards);
      setStats({
        totalQuestions: cards.length,
        correctAnswers: 0,
        incorrectAnswers: 0,
        completed: false,
      });
    }
    
    setMissedCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setDirection(0);
  };

  return {
    currentCard,
    currentIndex,
    isFlipped,
    isFinished,
    stats,
    direction,
    flip,
    handleAnswer,
    restart,
  };
};
