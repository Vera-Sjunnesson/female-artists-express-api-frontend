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
`;

type SelectFormProps = {
  id: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  to: string;
}

export const InputForm = ({ id, value, type, setValue, to } : SelectFormProps) => {
  return (
      <Form>
        <label htmlFor={id}>
          <Input
            type={type}
            id={id}
            value={value}
            onChange={(event) => setValue(event.target.value)} />
        </label>
        <SearchButton
          to={to} />
      </Form>
  );
};
