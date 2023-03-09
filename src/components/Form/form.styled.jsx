import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormDesk = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border: 4px solid black;
  padding: 20px;
  width: 400px;
`;

export const LableForm = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ButtonForm = styled.button`
  width: 100px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 20px;

  :hover {
    border: 2px solid blue;
  }
`;

export const FieldForm = styled(Field)`
  border-radius: 5px;
`;
