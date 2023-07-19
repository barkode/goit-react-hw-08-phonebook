import styled from '@emotion/styled';

export const Label = styled.div`
  display: block;
  margin-bottom: 10px;
  color: #666;
`;

export const FieldName = styled.p`
  font-weight: 600;
  font-size: larger;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 100%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  transition: all 0.2s ease;

  :hover {
    box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
  }
  :focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
  }
`;
