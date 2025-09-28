import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Carss from './Vehicule.tsx';


createRoot(document.getElementById('sandy')!).render(
  <StrictMode>
    <Carss />
  </StrictMode>,
)

