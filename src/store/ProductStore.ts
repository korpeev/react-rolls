import { configure, makeAutoObservable, runInAction } from "mobx";
import Api from "../api/Api";
import { Product, OrderOption } from "./../types/Product";
import RootStore from "./RootStore";
configure({ enforceActions: "always" });
export default class ProductStore {
  RootStore: RootStore;
  products: Product[] = [];
  searchText: string = "";
  isLoading: boolean = false;
  constructor(RootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.RootStore = RootStore;
  }
  fetchProducts() {
    this.isLoading = true;
    Api.fetchData()
      .then(data => {
        runInAction(() => {
          this.products = [...data];
        });
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  }
  async sortBy({ field, type }: OrderOption) {
    this.isLoading = true;
    const response = await Api.sortBy({ field, type });
    this.isLoading = false;
    this.products = [...response];
  }
  // searchBy(text: string) {
  //   this.searchText = text;
  //   return text;
  // }
}
