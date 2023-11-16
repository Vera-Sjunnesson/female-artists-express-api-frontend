import React, { useState } from 'react';
import { Animation } from '../lib/Animation';
import { SelectForm } from '../lib/Forms';

export const SelectBirthYear = () => {
  const [bornAfter, setBornAfter] = useState('');
  return (
    <>
      <SelectForm
        value={bornAfter}
        setValue={setBornAfter}
        to={`/born-after/${bornAfter}`} />
      <Animation />
    </>
  )
}
