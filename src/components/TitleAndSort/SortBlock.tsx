import React from 'react';
import useSortBy from '../../hooks/useSortBy';
import cl from './TitleAndSort.module.scss';
const SortBlock = () => {
  const { handleSelectChange, type, selectList } = useSortBy();
  return (
    <select className={cl.sort} onChange={handleSelectChange} value={type}>
      <option disabled>Сортировка по</option>
      {selectList.map((str) => (
        <option key={str.value} value={str.value}>
          {str.text}
        </option>
      ))}
    </select>
  );
};

export default SortBlock;
