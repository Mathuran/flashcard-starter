interface GameControlsProps {
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

export default function GameControls({ onAnswer, disabled }: GameControlsProps) {
  return (
    <div className="flex gap-6 mt-12">
      <button
        onClick={() => onAnswer(false)}
        disabled={disabled}
        className={`px-8 py-4 rounded bg-red-500 text-white font-mono font-bold border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all
          ${disabled 
            ? "opacity-50 cursor-not-allowed shadow-none translate-y-1 border-stone-400 bg-stone-100 text-stone-400" 
            : "hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]"
          }`}
      >
        Missed it
      </button>
      <button
        onClick={() => onAnswer(true)}
        disabled={disabled}
        className={`px-8 py-4 rounded bg-green-500 text-white font-mono font-bold border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all
          ${disabled 
            ? "opacity-50 cursor-not-allowed shadow-none translate-y-1 border-stone-400 bg-stone-100 text-stone-400" 
            : "hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]"
          }`}
      >
        Got it
      </button>
    </div>
  );
}
