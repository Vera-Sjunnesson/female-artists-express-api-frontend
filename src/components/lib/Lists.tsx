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

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Artist {
  Artist_ID: string;
  Name: string;
}

interface ListProps {
  list: Artist[];
  path: string;
}

export const ArtistList: React.FC<ListProps> = ({ list, path }) => {
  return (
    <StyledSection>
      {list.length === 0
        ? <StyledParagraphText>Sorry, no artists found</StyledParagraphText>
        : list.map((artist) => (
        <Link
          style={{ textDecoration: 'none' }}
          key={artist.Artist_ID}
          to={`/${path}/${artist.Artist_ID}`}>
          <StyledParagraphSmall>
            {artist.Name}
          </StyledParagraphSmall>
        </Link>
      ))}
    </StyledSection>
  );
};

interface ArtistDetailsProps {
  details: {
    Name: string;
    Nationality: string;
    Birth_Year: string;
    Death_Year: string;
  };
}

export const ArtistDetailsList = ({ details }: ArtistDetailsProps) => {
  return (
    <Details>
    {!details ? (
      <StyledParagraphText>Sorry, artist not found</StyledParagraphText>
    ) : (
      <>
        <StyledParagraphText>Name: {details?.Name}</StyledParagraphText>
        <StyledParagraphText>Nationality: {details?.Nationality ? details?.Nationality : "No data" }</StyledParagraphText>
        <StyledParagraphText>Birth Year: {details?.Birth_Year ? details?.Birth_Year : "No data" }</StyledParagraphText>
        <StyledParagraphText>Death Year: {details?.Death_Year ? details?.Death_Year : "-" }</StyledParagraphText>
      </>
    )}
  </Details>
  );
};
