import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Products } from '../../components';
import { useStore } from '../../hooks/useStore';
import cl from './Home.module.scss';
const Home = () => {
  const { ProductStore } = useStore();
  return (
    <>
      <Header />
      <main className={cl.main}>
        <div className={cl.container}>
          <div className={cl.wrapper}>
            <Products store={ProductStore} />
          </div>
        </div>
      </main>
    </>
  );
};

export default observer(Home);
