import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Products } from "../../components";
import { useStore } from "../../hooks/useStore";
import cl from "./Cart.module.scss";
const Cart = () => {
  const { CartStore } = useStore();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className={cl.cart}>
        <div className={cl.container}>
          <div className={cl.wrapper}>
            <Products store={CartStore} isOnCart />
            <div className={cl.cartOrder}>
              {CartStore.products.length > 0 && (
                <>
                  <div className={cl.cartTotalPrice}>
                    <span>Общая сумма: {CartStore.getTotalPrice} ТГ</span>
                  </div>
                  <div className={cl.cartOrderButtons}>
                    <button onClick={() => navigate("/")} className={cl.back}>
                      Вернуться назад
                    </button>
                    <button className={cl.order}>Оформить Заказ</button>
                    <button onClick={CartStore.clearCart}>Очистить Корзину</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default observer(Cart);
