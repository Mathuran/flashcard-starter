import { QuizStats } from "../lib/types";

interface SummaryProps {
  stats: QuizStats;
  onRestart: () => void;
  onRestartWithMissed?: () => void;
}

export default function Summary({ stats, onRestart, onRestartWithMissed }: SummaryProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white border-4 border-stone-900 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] max-w-md w-full">
      <h2 className="text-2xl font-bold font-mono mb-6 uppercase tracking-widest text-stone-900 border-b-4 border-stone-900 pb-2 w-full text-center">
        *** RESULTS ***
      </h2>
      
      <div className="w-full font-mono text-lg space-y-4 mb-8">
        <div className="flex justify-between border-b-2 border-stone-200 border-dashed pb-2">
          <span className="text-stone-600">Total Cards</span>
          <span className="font-bold">{stats.totalQuestions}</span>
        </div>
        
        <div className="flex justify-between border-b-2 border-stone-200 border-dashed pb-2">
          <span className="text-stone-600">Correct</span>
          <span className="font-bold text-green-600">{stats.correctAnswers}</span>
        </div>
        
        <div className="flex justify-between border-b-2 border-stone-200 border-dashed pb-2">
          <span className="text-stone-600">Missed</span>
          <span className="font-bold text-red-600">{stats.incorrectAnswers}</span>
        </div>

        <div className="flex justify-between pt-2">
            <span className="font-bold">Score</span>
            <span className="font-bold">
                {stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0}%
            </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {onRestartWithMissed && stats.incorrectAnswers > 0 && (
          <button
            onClick={onRestartWithMissed}
            className="w-full px-8 py-4 rounded bg-red-500 text-white font-mono font-bold border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]"
          >
            RETRY MISSED ({stats.incorrectAnswers})
          </button>
        )}
        <button
          onClick={onRestart}
          className="w-full px-8 py-4 rounded bg-blue-500 text-white font-mono font-bold border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]"
        >
          RESTART QUIZ
        </button>
      </div>
    </div>
  );
}
