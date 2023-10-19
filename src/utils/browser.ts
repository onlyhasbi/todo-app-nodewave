import React, { useEffect, useState } from 'react';

function Browser({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return fallback || null;
  }

  return children;
}

export default Browser;
