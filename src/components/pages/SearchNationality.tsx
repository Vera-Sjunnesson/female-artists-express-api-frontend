import React, { useState } from 'react';
import { Animation } from '../lib/Animation';
import { TextForm } from '../lib/Forms';

// Component to search for a nationality
export const SearchNationality = () => {
  const [nationality, setNationality] = useState<string>('');

  return (
    <>
    <TextForm 
      id="nationality"
      value={nationality}
      setValue={setNationality}
      to={`/nationality/${nationality}`} />
    <Animation />
    </>
  );
};