import React, { useState } from 'react';
import { Animation } from '../lib/Animation';
import { TextForm } from '../lib/Forms';

// Component to search a single artist
export const SearchArtist = () => {
  const [artistName, setArtistName] = useState('');

  return (
    <>
      <TextForm // Render the TextForm component
        id="name"
        value={artistName}
        setValue={setArtistName}
        to={`/artist/${artistName}`} />
      <Animation />
    </>
  );
}
