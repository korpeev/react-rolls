import CartStore from './CartStore';
import ProductStore from './ProductStore';

export default class RootStore {
  ProductStore: ProductStore;
  CartStore: CartStore;
  constructor() {
    this.ProductStore = new ProductStore(this);
    this.CartStore = new CartStore(this);
  }
}
