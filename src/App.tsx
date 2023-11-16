import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/lib/Header';
import { StarterPage } from './components/pages/StarterPage'; 
import { AllArtists } from './components/pages/AllArtists';
import { ArtistDetails } from './components/pages/ArtistDetails';
import { SearchNationality } from './components/pages/SearchNationality';
import { ArtistNationality } from './components/pages/ArtistNationality';
import { SelectBirthYear } from './components/pages/SelectBirthYear';
import { ArtistsBornAfter } from './components/pages/ArtistsBornAfter';
import { SearchArtist } from './components/pages/SearchArtist';
import { FindArtist } from './components/pages/FindArtist';


export const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/artists" element={<AllArtists />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/nationality" element={<SearchNationality />} />
          <Route path="/nationality/:nationality" element={<ArtistNationality />} />
          <Route path="/nationality/:nationality/:id" element={<ArtistDetails />} />
          <Route path="/born-after" element={<SelectBirthYear />} />
          <Route path="/born-after/:year" element={<ArtistsBornAfter />} />
          <Route path="/born-after/:year/:id" element={<ArtistDetails />} />
          <Route path="/artist" element={<SearchArtist />} />
          <Route path="/artist/:name" element={<FindArtist />} />
        </Routes>
      </BrowserRouter>
  )
}
