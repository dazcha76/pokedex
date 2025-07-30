import { useCallback } from 'react';

export const useSentenceCase = () => {
  const toSentenceCase = useCallback((text?: string) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }, []);

  return toSentenceCase;
};
