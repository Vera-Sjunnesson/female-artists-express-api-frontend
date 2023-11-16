import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

export const LottieContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  & > div {
    width: 90vw;

  @media (min-width: 1024px) {
    width: 50vw;
  }
  }
`;

export const Loader = () => {
  return (
    <LottieContainer>
      <Player
        src="https://assets7.lottiefiles.com/private_files/lf30_ipays02f.json"
        loop
        autoplay
        speed={1} />
    </LottieContainer>
  );
};