import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 10px;
  padding: 20px;

`;

export const StyledParagraphSmall = styled.p`
 color: #f85f36;
 font-size: 16px;
 text-decoration: none;
 cursor:pointer;
 font-family: Futura;
 font-weight: bold;
 margin: 0;

 &:hover {
    color: #25467dff;
  }
`;

export const StyledParagraphText = styled.p`
 color: #182F5D;
 font-size: 25px;
 font-family: Futura;
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
`;

interface Artist {
  Artist_ID: string;
  Name: string;
}

interface ListProps {
  list: Artist[];
}

export const ArtistList = ({ list }: ListProps) => {
  return (
    <StyledSection>
      {list.length === 0
        ? <StyledParagraphText>Sorry, no artists found</StyledParagraphText>
        : list.map((artist) => (
        <Link
          style={{ textDecoration: 'none' }}
          key={artist.Artist_ID}
          to={`/artists/${artist.Artist_ID}`}>
          <StyledParagraphSmall>
            {artist.Name}
          </StyledParagraphSmall>
        </Link>
      ))}
    </StyledSection>
  );
};
