import { Flashcard } from './types';

export const mockFlashcards: Flashcard[] = [
  {
    id: '1',
    question: 'What does HTML stand for?',
    answer: 'HyperText Markup Language',
    category: 'HTML',
  },
  {
    id: '2',
    question: 'What is the purpose of the "alt" attribute on an <img> tag?',
    answer: 'It provides alternative text for screen readers and when the image fails to load.',
    category: 'HTML',
  },
  {
    id: '3',
    question: 'What is the box model in CSS?',
    answer: 'A box that wraps around every HTML element, consisting of margins, borders, padding, and the actual content.',
    category: 'CSS',
  },
  {
    id: '4',
    question: 'What is the difference between "var", "let", and "const"?',
    answer: '"var" is function-scoped (or global), while "let" and "const" are block-scoped. "const" cannot be reassigned.',
    category: 'JavaScript',
  },
  {
    id: '5',
    question: 'What is a React Hook?',
    answer: 'A special function that lets you "hook into" React features like state and lifecycle methods in function components.',
    category: 'React',
  },
  {
    id: '6',
    question: 'What is the virtual DOM?',
    answer: 'A lightweight copy of the real DOM in memory. React uses it to verify what parts of the actual DOM need to be updated.',
    category: 'React',
  },
  {
    id: '7',
    question: 'What is a Promise in JavaScript?',
    answer: 'An object representing the eventual completion or failure of an asynchronous operation.',
    category: 'JavaScript',
  },
  {
    id: '8',
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheets',
    category: 'CSS',
  },
];
