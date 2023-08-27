import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState<boolean>(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);

  return matches;
};

export default useMediaQuery;
