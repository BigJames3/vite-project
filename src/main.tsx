import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import TheCar from './Vehicule.tsx';


createRoot(document.getElementById('sandy')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

