import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContactButton from './components/ContactButton.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ContactButton />
  </StrictMode>
);
