import React from 'react';

export function useForm<T>(defaultValue: T) {
  const [payload, setPayload] = React.useState<T>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { payload, setPayload, handleChange } as const;
}
