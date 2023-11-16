import React, { useState } from 'react';
import { Animation } from '../lib/Animation';
import { TextForm } from '../lib/Forms';

export const SearchArtist = () => {
  const [artistName, setArtistName] = useState('');

  return (
    <>
      <TextForm
        id="name"
        value={artistName}
        setValue={setArtistName}
        to={`/artist/${artistName}`} />
      <Animation />
    </>
  );
}
