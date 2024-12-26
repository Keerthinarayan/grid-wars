import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "What is 2 + 2?",
    difficulty: "easy",
    correctAnswer: "4",
    imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
  },
  {
    id: 2,
    text: "What is 5 × 5?",
    difficulty: "easy",
    correctAnswer: "25",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav"
  },
  {
    id: 3,
    text: "What is 10 ÷ 2?",
    difficulty: "medium",
    correctAnswer: "5",
    imageUrl: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav"
  },
  {
    id: 4,
    text: "What is 8 × 7?",
    difficulty: "medium",
    correctAnswer: "56",
    imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
  },
  {
    id: 5,
    text: "What is 12 × 12?",
    difficulty: "hard",
    correctAnswer: "144",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav"
  }
];

// Helper functions
export const getNextQuestion = (answeredQuestions: number[]): Question | null => {
  return questions.find(q => !answeredQuestions.includes(q.id)) || null;
};

export const isCorrectAnswer = (questionId: number, answer: string): boolean => {
  const question = questions.find(q => q.id === questionId);
  return question?.correctAnswer.toLowerCase() === answer.toLowerCase();
};
