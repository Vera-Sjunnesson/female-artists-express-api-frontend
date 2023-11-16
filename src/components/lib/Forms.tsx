import React from 'react';
import styled from 'styled-components';
import { SearchButton } from './NavigationAndButtons';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #182F5D;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  height: 19px;
`;

export const Select = styled.select`
  border: 1px solid #182F5D;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  width: 161px;
  height: 31px;
`;

type TextFormProps = {
  id: string;
  value: string;
  setValue: (value: string) => void;
  to: string;
}

export const TextForm = ({ id, value, setValue, to } : TextFormProps) => {
  return (
    <Form>
      <label htmlFor={id}>
        <Input
          type="text"
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)} />
      </label>
      <SearchButton
        to={to} />
    </Form>
  );
};

type SelectFormProps = {
  value: string;
  setValue: (value: string) => void;
  to: string;
}

export const SelectForm = ({ value, setValue, to } : SelectFormProps) => {
  return (
    <>
      <Form>
        <label htmlFor="birthyear">
          <Select
            id="birthyear"
            aria-label="Drop down menu to select a year born after"
            onChange={(event) => setValue(event.target.value)}
            value={value}>
            <option value="" disabled>Born after</option>
            <option value="1850">1850</option>
            <option value="1900">1900</option>
            <option value="1950">1950</option>
            <option value="1970">1970</option>
            <option value="1990">1990</option>
          </Select>
        </label>
        <SearchButton to={to} />
      </Form>
    </>
  )
}
