import React, { FC, useMemo } from "react";
import { Badge } from "..";
import useAsyncValue from "../../hooks/useAsyncValue";
import { Cart } from "../../types/Product";
import cl from "./Products.module.scss";
import cn from "classnames";
interface ProductItemProps {
  item: Cart;
  addItemToCart: (product: Cart, count: number) => void;
  itemsOnCart: Cart[];
  isOnCart?: boolean;
  removeOnCart?: (id: string) => () => void;
}
const ProductItem: FC<ProductItemProps> = ({ item, addItemToCart, itemsOnCart, removeOnCart, isOnCart }) => {
  const findedItem = itemsOnCart?.find(cartItem => cartItem.id === item.id) as Cart;
  const sumOfItem = useMemo(() => {
    if (item.count) {
      return item.price * item.count;
    }
  }, [item]);
  const [value, setValue] = useAsyncValue(findedItem?.count ?? 0);
  const handleAddItem = async () => {
    const newValue = await setValue(value + 1);
    addItemToCart(item, newValue);
  };
  const handleDecItem = async () => {
    const newValue = await setValue(value - 1);
    if (newValue < 1 && removeOnCart) {
      removeOnCart(item.id)();
      return;
    }
    addItemToCart(item, newValue);
  };
  return (
    <div
      key={item.id}
      className={cn(cl.product, {
        [cl.productCart]: isOnCart,
      })}
    >
      <div className={cn({ [cl.desc]: isOnCart })}>
        <img src={item.imgUrl} alt="" />
        <div className={cl.productText}>
          <span>{item.name}</span>
          <p>{item.description}</p>
        </div>
      </div>
      <div className={cl.productsAction}>
        <span>{item.price} ТГ</span>
        <div className={cn(cl.productButton, { [cl.cartButton]: isOnCart })}>
          {isOnCart ? (
            <>
              <button onClick={handleAddItem}>+</button>
              <span>{findedItem?.count}</span>
              <button onClick={handleDecItem}> &minus; </button>
            </>
          ) : (
            <>
              <button onClick={handleAddItem}>В корзину</button>
              <Badge count={findedItem?.count} />
            </>
          )}
        </div>
        {isOnCart && (
          <>
            <div>{sumOfItem} ТГ</div>
            <button onClick={removeOnCart && removeOnCart(item.id)} className={cl.delete}>
              &times;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
