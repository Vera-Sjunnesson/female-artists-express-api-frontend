import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/lib/Header';
import { StarterPage } from './components/StarterPage'; 
import { AllArtists } from './components/AllArtists';
import { ArtistDetails } from './components/ArtistDetails';
import { SelectNationality } from './components/SelectNationality';
import { ArtistNationality } from './components/ArtistNationality';

export const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/artists" element={<AllArtists />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/nationality" element={<SelectNationality />} />
          <Route path="/nationality/:nationality" element={<ArtistNationality />} />
        </Routes>
      </BrowserRouter>
  )
}
