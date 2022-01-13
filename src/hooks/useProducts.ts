import { Product, Cart } from "./../types/Product";
import { useMemo } from "react";
import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";

const useProducts = (store: ProductStore | CartStore, text: string) => {
  const items = useMemo((): Product[] | Cart[] => {
    return store.products?.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
  }, [text, store.products]);
  const addItemToCart = (product: Cart, count: number) => {
    const newItem = { ...product, count };
    store.RootStore.CartStore.addToCart(newItem);
  };

  const removeItemOnCart = (id: string) => {
    return () => store.RootStore.CartStore.removeFromCart(id);
  };

  const itemsOnCart = store.RootStore.CartStore.products;
  return { items, addItemToCart, itemsOnCart, removeItemOnCart };
};

export default useProducts;
