import React from 'react';
import './styles/main.scss';

import WaterVisualization from './components/WaterVisualization';
import InputControls from './components/InputControls';
import Calculator from './components/Calculator';
import NotificationManager from './components/NotificationManager';
import Settings from './components/Settings';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Water Intake Tracker</h1>
      </header>
      <main className="app-main">
        <WaterVisualization />
        <InputControls />
        <Calculator />
        <NotificationManager />
        <Settings />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 - Bruna Scarpelli (✿◡‿◡)</p>
      </footer>
    </div>
  );
}

export default App;