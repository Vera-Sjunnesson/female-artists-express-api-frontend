import React from 'react';
import styled from 'styled-components';


interface SectionProps {
  $starter?: boolean; 
}

export const StyledSection = styled.section<SectionProps>`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.$starter ? '0' : '45px')};
`;

interface AnimationProps {
  isStarter?: boolean;
}

export const Animation = ({ isStarter }: AnimationProps) => {
  return (
    <StyledSection $starter={isStarter}>
      <img src="assets/gif_artwork.gif" alt="gif animation" style={{ width: '300px' }} />
    </StyledSection>
  );
};