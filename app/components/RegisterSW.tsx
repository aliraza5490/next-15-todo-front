'use client';
import { useEffect } from 'react';

function useRegisterSW() {
  async function registerServiceWorker() {
    await navigator.serviceWorker
      .register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      })
      .then((registration) => {
        console.log(
          'Service Worker registered with scope:',
          registration.scope,
        );
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}

export default useRegisterSW;
