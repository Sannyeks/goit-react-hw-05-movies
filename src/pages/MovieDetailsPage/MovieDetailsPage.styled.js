import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnBack = styled.button`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #3b5998;
  &:hover {
    cursor: pointer;
    background-color: #3b5998;
    font-weight: 500;
  }
  &.active {
    background-color: #3b5998;
    font-weight: 500;
    color: black;
  }
`;

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px double grey;
`;
export const Title = styled.h3`
  margin-bottom: 20px;
`;
export const BtnInfoList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const BtnLink = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  background-color: transparent;
  border: 3px solid #3b5998;
  &:hover {
    cursor: pointer;
    background-color: #3b5998;
    font-weight: 500;
  }
  &.active {
    background-color: #3b5998;
    font-weight: 500;
    color: black;
  }
`;
