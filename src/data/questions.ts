import { Question } from '../types';

// Helper function to generate questions
const generateQuestions = (): Question[] => {
  return Array.from({ length: 50 }, (_, index) => {
    const difficulty = index < 20 ? 'easy' : index < 40 ? 'medium' : 'hard';
    const questionNumber = index + 1;
    
    return {
      id: questionNumber,
      text: `Question ${questionNumber}: What is the capital of France? (Sample ${difficulty} question)`,
      difficulty,
      correctAnswer: 'Paris',
      // Add your actual questions, images, and audio here
      ...(questionNumber % 3 === 0 && {
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
      }),
      ...(questionNumber % 5 === 0 && {
        audioUrl: "https://example.com/audio/sample.mp3"
      })
    };
  });
};

export const questions = generateQuestions();