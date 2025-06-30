'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook to determine if the viewport matches a CSS media query.
 * @param query - The media query string (e.g., "(max-width: 767px)").
 * @returns boolean - True if the query matches, false otherwise.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};
