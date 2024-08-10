"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Player = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search.trim() !== '') {
        const options = {
          method: 'GET',
          url: 'https://spotify23.p.rapidapi.com/search/',
          params: {
            q: search,
            type: 'multi',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
          },
          headers: {
            'X-RapidAPI-Key': 'c5a77051abmshadc8eff1cee4fdfp1883d1jsn9fed63204675',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };

        axios.request(options).then(function (response) {
          setSearchResult(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      } else {
        setSearchResult(null);
      }
    }, 1000); // Delay in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div>
      <textarea
        placeholder="Search for a song, artist, or album"
        onChange={(e) => setSearch(e.target.value)}
      ></textarea>
      {searchResult && (
        <div>
          {/* Render your search results here */}
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Player;
