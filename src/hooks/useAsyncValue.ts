import { useState } from 'react';

const useAsyncValue = <T>(
  initialValue: T
): [T, (newValue: T) => Promise<T>] => {
  const [value, setValue] = useState<T>(initialValue);

  const setter = (newValue: T): Promise<T> =>
    new Promise((resolve) => {
      setValue(newValue);
      resolve(newValue);
    });

  return [value, setter];
};

export default useAsyncValue;
