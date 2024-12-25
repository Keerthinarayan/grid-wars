import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Dev tools)
  if (
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
    // Prevent Ctrl+U (View source)
    (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
    // Prevent F12
    e.key === 'F12'
  ) {
    e.preventDefault();
  }
});

// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Detect DevTools opening
const devToolsCheck = () => {
  const widthThreshold = window.outerWidth - window.innerWidth > 160;
  const heightThreshold = window.outerHeight - window.innerHeight > 160;
  
  if (widthThreshold || heightThreshold) {
    document.body.innerHTML = 'Developer tools are not allowed.';
  }
};

setInterval(devToolsCheck, 1000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);