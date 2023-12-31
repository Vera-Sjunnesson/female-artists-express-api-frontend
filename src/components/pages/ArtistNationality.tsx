import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../lib/Loader';
import { NATIONALITY_URL } from '../../utils/urls';
import { ArtistList } from '../lib/Lists';

interface NationalityList {
  Artist_ID: string;
  Name: string;
}

// Component fetching and displaying artist list based on nationality
export const ArtistNationality: React.FC = () => {
  const [list, setList] = useState<NationalityList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { nationality } = useParams<{ nationality?: string }>();

  useEffect(() => {
    setLoading(true);
    // Function to fetch artist list based on nationality
    const fetchArtistNationality = async () => {

      try {
        if (!nationality) {
          throw new Error('Nationality is undefined');
        }

        const nationalityUrl = NATIONALITY_URL(nationality)

        if(!nationalityUrl) {
          throw new Error('Failed to fetch nationality');
        }

        const response = await fetch(nationalityUrl);
        const data = await response.json();
        setList(data.body.artist);

      } catch (error) {
        console.error(error);

      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchArtistNationality();
  }, [nationality]);

  if (loading) {
    return <Loader />; // Display loader while data is being fetched
  }

  return (
    <ArtistList list={list} path={`nationality/${nationality}`}/> // Rendering artist list (based on nationality) component
  );
};