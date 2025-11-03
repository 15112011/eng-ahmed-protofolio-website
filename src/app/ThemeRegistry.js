'use client';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';

// Create emotion cache for client-side
function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function ThemeRegistry({ children }) {
  const [cache] = useState(() => createEmotionCache());

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
