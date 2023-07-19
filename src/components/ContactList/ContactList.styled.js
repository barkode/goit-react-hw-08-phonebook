import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  color: #2c974b;
  font-size: large;
  transition: all 0.3s ease-in-out;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
`;

export const Button = styled.button`
  margin-left: 20px;
  display: inline-block;
  outline: 0;
  appearance: none;
  padding: 0px 12px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(9, 128, 76);
  box-shadow: rgb(19 170 82 / 40%) 0px 2px 3px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  height: 36px;
  transition: all 150ms ease-in-out 0s;

  :hover {
    color: rgb(255, 255, 255);
    background-color: rgb(17, 97, 73);
    box-shadow: rgb(19 170 82 / 40%) 0px 2px 3px,
      rgb(195 231 202) 0px 0px 0px 3px;
  }

  :active {
    background-color: #12752e;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;
