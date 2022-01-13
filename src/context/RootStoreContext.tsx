import { createContext, FC } from 'react';
import RootStore from '../store/RootStore';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider: FC = ({ children }) => {
  const rootStore = new RootStore();
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
