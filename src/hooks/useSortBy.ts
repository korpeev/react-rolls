import { useStore } from './useStore';
import { OrderByDirection } from 'firebase/firestore';
import { useState, ChangeEvent } from 'react';
type SelectList = {
  text: string;
  value: string;
};
type Map = {
  [key: string]: OrderByDirection;
};
const useSortBy = () => {
  const [type, setType] = useState<string>('Сортировка по');
  const {
    ProductStore: { sortBy },
  } = useStore();
  const selectList: SelectList[] = [
    {
      text: 'Цене',
      value: 'price',
    },
    {
      text: 'Попульярности',
      value: 'rate',
    },
    {
      text: 'Альфавиту',
      value: 'name',
    },
  ];
  const map: Map = {
    price: 'desc',
    rate: 'desc',
    name: 'asc',
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setType(e.target.value);
    sortBy({ field: e.target.value, type: map[e.target.value] });
  };

  return { handleSelectChange, type, selectList };
};

export default useSortBy;
