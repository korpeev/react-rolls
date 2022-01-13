import React, { ChangeEvent, FC } from 'react';
import Badge from '../Badge/Badge';
import { HiOutlineSearch } from 'react-icons/hi';
import cl from './TitleAndSort.module.scss';

interface SearchBlockProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBlock: FC<SearchBlockProps> = ({ text, onChange }) => {
  return (
    <div className={cl.search}>
      <Badge color='#d2d2d2' className={cl.searchIcon} Icon={HiOutlineSearch} />
      <input type='text' value={text} onChange={onChange} />
    </div>
  );
};

export default SearchBlock;
