import React, { useState, useEffect } from 'react';
import { Loader } from '../lib/Loader';
import { ArtistList } from '../lib/Lists';

interface Artist {
  Artist_ID: string;
  Name: string;
}

// Component to display a list of all artists
export const AllArtists: React.FC = () => {
  const [list, setList] = useState<Artist[]>([]); // State to hold the list of artists
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading status

  useEffect(() => {
    setLoading(true);
    // Function to fetch the list of artists
    const fetchArtists = async () => {
      try {
        const url = process.env.REACT_APP_FEMALE_ARTISTS_URL

        if (!url) {
          throw new Error('Failed to fetch female artists');
        }

        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        setList(data.body.artistsMoma);
 
      } catch (error) {
        console.error(error);

      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

  fetchArtists();
  }, []);

  if (loading) {
    return <Loader />; // Display loader while data is being fetched
  }

  return (
    <ArtistList list={list} path="artists" /> // Render the ArtistList component with the retrieved list of artists
  );
};