import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/lib/Header';
import { StarterPage } from './components/StarterPage'; 
import { AllArtists } from './components/AllArtists';
import { ArtistDetails } from './components/ArtistDetails';
import { SelectNationality } from './components/SelectNationality';
import { ArtistNationality } from './components/ArtistNationality';
import { SelectBirthYear } from './components/SelectBirthYear'; 
import { ArtistsBornAfter } from './components/ArtistsBornAfter';
import { SearchArtist } from './components/SearchArtist';
import { FindArtist } from './components/FindArtist';


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
          <Route path="/born-after" element={<SelectBirthYear />} />
          <Route path="/born-after/:year" element={<ArtistsBornAfter />} />
          <Route path="/artists/name" element={<SearchArtist />} />
          <Route path="/artists/name/:name" element={<FindArtist />} />
        </Routes>
      </BrowserRouter>
  )
}
