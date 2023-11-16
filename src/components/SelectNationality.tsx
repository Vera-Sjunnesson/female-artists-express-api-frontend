import React, { useState } from 'react';
import { Animation } from './lib/Animation';
import { InputForm } from './lib/Forms';

export const SelectNationality = () => {
  const [nationality, setNationality] = useState<string>('');

  return (
    <>
    <InputForm
      id="nationality"
      value={nationality}
      type="text"
      setValue={setNationality}
      to={`/nationality/${nationality}`} />
    <Animation />
    </>
  );
};