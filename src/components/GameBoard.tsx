import React, { useState } from 'react';
import { Question, GameState } from '../types';
import { QuestionModal } from './QuestionModal';
import { ChevronRight } from 'lucide-react';

interface GameBoardProps {
  gameState: GameState;
  questions: Question[];
  onAnswerQuestion: (questionId: number, isCorrect: boolean) => void;
}

export function GameBoard({ gameState, questions, onAnswerQuestion }: GameBoardProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const TOTAL_BOXES = 50;

  const getDifficultyColor = (index: number) => {
    // Determine difficulty based on position
    const difficulty = index < 20 ? 'easy' 
      : index < 40 ? 'medium' 
      : 'hard';

    switch (difficulty) {
      case 'easy': return 'bg-green-100 hover:bg-green-200';
      case 'medium': return 'bg-yellow-100 hover:bg-yellow-200';
      case 'hard': return 'bg-red-100 hover:bg-red-200';
      default: return 'bg-gray-100';
    }
  };

  const getBoxStyle = (index: number) => {
    const isCurrentPosition = index === gameState.currentPosition;
    const question = questions.find(q => q.id === index + 1);
    const isAnswered = question && gameState.answeredQuestions.includes(question.id);
    const isClickable = index === gameState.currentPosition && question;
    
    return `
      aspect-square rounded-lg shadow-md p-2 relative
      ${getDifficultyColor(index)}
      ${isAnswered ? 'opacity-50' : ''}
      ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}
      ${isCurrentPosition ? 'ring-4 ring-purple-500' : ''}
      transition duration-200
    `;
  };

  const getMoveIndicator = (index: number) => {
    const moves = index < 20 ? 1 
      : index < 40 ? 2 
      : 3;

    return Array(moves).fill(0).map((_, i) => (
      <ChevronRight 
        key={i} 
        className="w-4 h-4 text-purple-600"
        style={{ transform: `translateX(${i * -4}px)` }}
      />
    ));
  };

  const handleBoxClick = (index: number) => {
    if (index === gameState.currentPosition) {
      const question = questions.find(q => q.id === index + 1);
      if (question) {
        setSelectedQuestion(question);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="fixed top-4 left-4 bg-white p-4 rounded-lg shadow-md z-10">
        <h2 className="text-xl font-bold">Score: {gameState.score}</h2>
        <p>Position: {gameState.currentPosition + 1}/50</p>
        <p>Player: {gameState.playerName}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 rounded"></div>
            <span>Easy (Move 1)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-100 rounded"></div>
            <span>Medium (Move 2)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 rounded"></div>
            <span>Hard (Move 3)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4 max-w-6xl mx-auto mt-20">
        {Array.from({ length: TOTAL_BOXES }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleBoxClick(index)}
            disabled={index !== gameState.currentPosition}
            className={getBoxStyle(index)}
          >
            <span className="text-lg font-bold">{index + 1}</span>
            {index === gameState.currentPosition && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex">
                {getMoveIndicator(index)}
              </div>
            )}
          </button>
        ))}
      </div>

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onAnswer={(isCorrect) => {
            onAnswerQuestion(selectedQuestion.id, isCorrect);
            setSelectedQuestion(null);
          }}
        />
      )}
    </div>
  );
}
