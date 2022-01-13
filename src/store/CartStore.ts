import { makeAutoObservable, runInAction } from "mobx";
import { Cart } from "./../types/Product";
import RootStore from "./RootStore";

export default class CartStore {
  RootStore: RootStore;
  products: Cart[] = [];
  isLoading: boolean = false;
  constructor(RootStore: RootStore) {
    this.RootStore = RootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  getAllProducts(products: Cart[]) {
    this.products = products;
  }
  get getTotalPrice() {
    return this.products.reduce((acc, item) => {
      if (item.count) {
        acc += item.count * item.price;
      }
      return acc;
    }, 0);
  }
  addToCart(product: Cart) {
    const hasInCart = this.products.some(item => item.id === product.id);
    if (hasInCart) {
      this.products = this.products.map(item => (item.id === product.id ? { ...item, count: product.count } : item));
    } else {
      this.products = [...this.products, product];
    }
    localStorage.setItem("cart", JSON.stringify(this.products));
  }
  removeFromCart(id: string) {
    this.products = this.products.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.products));
  }
  clearCart() {
    this.products = [];
    localStorage.removeItem("cart");
  }
}
