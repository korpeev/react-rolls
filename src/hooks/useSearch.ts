import { useState, ChangeEvent } from 'react';
const useSearch = () => {
  const [text, setText] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return { handleOnChange, text };
};
export default useSearch;
