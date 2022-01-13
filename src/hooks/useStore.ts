import RootStore from '../store/RootStore';
import { RootStoreContext } from './../context/RootStoreContext';
import { useContext } from 'react';
export const useStore = (): RootStore => {
  return useContext(RootStoreContext);
};
