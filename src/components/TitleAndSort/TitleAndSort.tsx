import React, { ChangeEvent, FC } from 'react';
import SortBlock from './SortBlock';
import SearchBlock from './SearchBlock';
import cl from './TitleAndSort.module.scss';
import { observer } from 'mobx-react-lite';
interface TitleAndSortProps {
  title: string;
  isOnCart?: boolean;
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TitleAndSort: FC<TitleAndSortProps> = ({
  title,
  isOnCart,
  text,
  onChange,
}) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.title}>
        <h3>{title}</h3>
        {text.length > 0 && <span> Поиск по запросу: {text}</span>}
      </div>
      {!isOnCart && (
        <div className={cl.actions}>
          <SearchBlock text={text} onChange={onChange} />
          <SortBlock />
        </div>
      )}
    </div>
  );
};

export default observer(TitleAndSort);
