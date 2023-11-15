import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { StarterPage } from './components/StarterPage'; 
import { AllArtists } from './components/AllArtists';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/artists" element={<AllArtists />} />
      </Routes>
    </BrowserRouter>
  )
}