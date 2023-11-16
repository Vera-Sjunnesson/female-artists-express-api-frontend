import React, { useState } from 'react';
import { Animation } from '../lib/Animation';
import { TextForm } from '../lib/Forms';

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