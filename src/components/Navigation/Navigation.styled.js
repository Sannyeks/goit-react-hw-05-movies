import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  height: 65px;
  padding-top: 25px;
  padding-bottom: 35px;
  border-bottom: 4px double #3b5998;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 25px;
`;
export const NavItem = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    color: #3b5998;
  }
  &.active {
    color: #3b5998;
    border: 2px solid #3b5998;
    font-weight: 500;
  }
`;
