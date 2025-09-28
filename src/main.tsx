import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parent from './App.tsx'
// import TheCar from './Vehicule.tsx';


createRoot(document.getElementById('sandy')!).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)

