import React, { useState } from 'react';
import { Animation } from '../lib/Animation';
import { SelectForm } from '../lib/Forms';

// Component to select a born after value
export const SelectBirthYear = () => {
  const [bornAfter, setBornAfter] = useState('');
  return (
    <>
      <SelectForm // Render the SelectForm component
        value={bornAfter}
        setValue={setBornAfter}
        to={`/born-after/${bornAfter}`} />
      <Animation />
    </>
  )
}
