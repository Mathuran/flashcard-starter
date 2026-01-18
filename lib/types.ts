export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category?: 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'General';
  correct?: boolean;
}

export interface QuizStats {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  completed: boolean;
}
