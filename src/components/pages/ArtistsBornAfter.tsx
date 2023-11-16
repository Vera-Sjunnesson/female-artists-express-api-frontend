import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../lib/Loader';
import { BORN_AFTER_URL } from '../../utils/urls';
import { ArtistList } from '../lib/Lists';

interface BornAfterList {
  Artist_ID: string;
  Name: string;
}

// Component fetching and displaying artist list based on what year they were born after
export const ArtistsBornAfter: React.FC  = () => {
  const [list, setList] = useState<BornAfterList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { year } = useParams<{ year?: string }>();

  useEffect(() => {
    setLoading(true);
    // Function to fetch artist list based on birth year
    const fetchArtistBornAfter = async () => {

      try {
        if (!year) {
          throw new Error('Year is undefined');
        }

        const bornAfterUrl = BORN_AFTER_URL(year)

        if(!bornAfterUrl) {
          throw new Error('Failed to fetch artists born after this year');
        }

        const response = await fetch(bornAfterUrl);
        const data = await response.json();
        setList(data.body.artist);

      } catch (error) {
        console.error(error);

      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchArtistBornAfter();
  }, [year]);

  if (loading) {
    return <Loader />; // Display loader while data is being fetched
  }

  return (
    <ArtistList list={list}  path={`born-after/${year}`} /> // Rendering artist list component (based on birth year)
  );
};