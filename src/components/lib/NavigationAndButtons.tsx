import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledSection = styled.section`
  background-color: transperent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const NavLinkeStyled = styled(NavLink)`
  border: none;
  background: #ffffff;
  color: #182F5D;
  font-size: 25px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  text-decoration: none;
  font-family: Futura;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  gap: 10px;

  &:hover {
    background-color: #f85f36;
    color: #ffffff; 
  }

  &.active {
    background-color: #25467dff;
    color: #ffffff;
  }
`

export const SearchButtonStyled = styled(Link)`
  border: none;
  background-color: #25467dff;
  color: #ffffff;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: none;
  font-family: Futura;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  gap: 10px;

  &:hover {
    background: #ffffff;
    color: #182F5D;
  }
`

type NavButtonProps = {
  to: string;
  linkName: string;
}

export const NavButton = ({ to, linkName } : NavButtonProps) => {
  return (
    <NavLinkeStyled to={to}>
       {linkName}
    </NavLinkeStyled>
  )
}

export const NavBar = () => {
  return (
    <StyledSection>
      <NavButton to="/" linkName="HOME"/>
      <NavButton to="/artists" linkName="ALL ARTISTS"/>
      <NavButton to="/nationality" linkName="NATIONALITY"/>
      <NavButton to="/born-after" linkName="BIRTH YEAR"/>
      <NavButton to="artists/name" linkName="SEARCH ARTIST"/>
  </StyledSection>
  )
}

type SearchButtonProps = {
  to: string;
}

export const SearchButton = ({ to } : SearchButtonProps) => {
  return (
    <SearchButtonStyled to={to}>
      SEARCH
    </SearchButtonStyled>
  )
}
