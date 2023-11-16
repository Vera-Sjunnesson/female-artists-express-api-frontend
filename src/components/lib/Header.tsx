import React from 'react';
import { NavBar } from './NavigationAndButtons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const StyledParagraphSpan = styled.span`
 color: #f85f36;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;

   @media (min-width: 1024px) {
   font-size: 40px;
  }
`;

export const StyledParagraphSpanXSmall = styled.span`
 color: #f85f36;
 text-decoration: none;
 font-family: Futura;
 font-weight: bold;
`;

export const StyledParagraphLink = styled(NavLink)`
  color: #182F5D;
  font-family: Futura;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  gap: 10px;

  @media (min-width: 1024px) {
   font-size: 25px;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <StyledParagraphLink to="/">
        <StyledParagraphSpan>
          FEMALE ARTISTS
        </StyledParagraphSpan>
        in the MoMA collection
        <StyledParagraphSpanXSmall>
          (the Museum of Modern Art, New York)
        </StyledParagraphSpanXSmall>
      </StyledParagraphLink>
      <NavBar />
    </Wrapper>
  )
}