import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_ARTIST_URL } from '../../utils/urls';
import { ArtistDetailsList } from '../lib/Lists';

// Interface defining the structure of artist details
interface Details {
  Name: string;
  Nationality: string;
  Birth_Year: string;
  Death_Year: string;
}

// Component fetching and displaying artist details
export const ArtistDetails: React.FC = () => {
  const [details, setDetails] = useState<Details>({
    Name: '',
    Nationality: '',
    Birth_Year: '',
    Death_Year: '',
  });

  const { id } = useParams<{ id?: string }>();
  
  useEffect(() => {
    // Function to fetch artist details
    const fetchArtistDestails = async () => {

      try {
        // Checking if the artist ID is available
        if (id === undefined) {
          throw new Error('Artist ID is undefined');
        }

        const url = SINGLE_ARTIST_URL(id);
        
        if(!url) {
          throw new Error('Failed to fetch artist details');
        }

        const response = await fetch(url);
        const data = await response.json();
        setDetails(data.body.artistsMoma);

      } catch (error) {
        console.error(error);
      }
    };

  fetchArtistDestails();
  }, []);

  return (
    <ArtistDetailsList details={details}/> // Rendering artist details list component
  )
}