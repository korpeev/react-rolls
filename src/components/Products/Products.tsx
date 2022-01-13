import { observer } from "mobx-react-lite";
import cn from "classnames";
import React, { FC } from "react";
import { TitleAndSort } from "..";
import useProducts from "../../hooks/useProducts";
import useSearch from "../../hooks/useSearch";
import CartStore from "../../store/CartStore";
import ProductStore from "../../store/ProductStore";
import ProductItem from "./ProductItem";
import cl from "./Products.module.scss";
import Info from "./Info";
interface ProductsProps {
  store: ProductStore | CartStore;
  isOnCart?: boolean;
}
const Products: FC<ProductsProps> = ({ store, isOnCart }) => {
  const { text, handleOnChange } = useSearch();
  const { items, addItemToCart, itemsOnCart, removeItemOnCart } = useProducts(store, text);
  if (store.isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <TitleAndSort
        isOnCart={isOnCart}
        title={isOnCart ? "Корзина" : "Все роллы"}
        text={text}
        onChange={handleOnChange}
      />
      <div className={cn(cl.products, { [cl.proudctWrapper]: isOnCart })}>
        {items.length > 0 ? (
          items.map(item => (
            <ProductItem
              key={item.id}
              item={item}
              addItemToCart={addItemToCart}
              itemsOnCart={itemsOnCart}
              isOnCart={isOnCart}
              removeOnCart={removeItemOnCart}
            />
          ))
        ) : (
          <Info
            title={isOnCart ? "Корзина Пуста" : ""}
            description={
              isOnCart
                ? "Вероятней всего, вы ничего не заказали. Для того, чтобы это сделать, перейдите на главную страницу."
                : "Ничего не найдено"
            }
            isCart={isOnCart}
          />
        )}
      </div>
    </>
  );
};

export default observer(Products);
