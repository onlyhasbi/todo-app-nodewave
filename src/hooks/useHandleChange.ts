import React from 'react';

export function useHandleChange<T>(defaultValue: T) {
  const [payload, setPayload] = React.useState<T>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({
      ...((prev ?? {}) as T),
      [e.target.name]: e.target.value,
    }));
  };

  return { payload, setPayload, handleChange } as const;
}
