import React from 'react';
import { GameStateProvider } from './context/GameStateContext';
import GtaPortfolio from './components/gta/GtaPortfolio';

export default function App() {
  return (
    <GameStateProvider>
      <div className="relative min-h-screen bg-[#070709] text-white selection:bg-[#FF007F] selection:text-white overflow-hidden">
        <GtaPortfolio />
      </div>
    </GameStateProvider>
  );
}

