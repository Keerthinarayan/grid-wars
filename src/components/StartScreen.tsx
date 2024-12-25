import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (playerName: string) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      onStart(playerName);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Grid Wars</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
              Enter Your Group Name
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter group name..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
}