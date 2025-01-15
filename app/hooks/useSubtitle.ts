// app/hooks/useSubtitle.ts
import { useEffect } from 'react';

const useSubtitle = (subtitle: string) => {
  useEffect(() => {
    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
      subtitleElement.textContent = subtitle;
    }
  }, [subtitle]);
};

export default useSubtitle;
