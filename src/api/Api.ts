import { OrderOption } from './../types/Product';
import {
  collection,
  getDocs,
  orderBy,
  query,
  QuerySnapshot,
} from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { Product } from '../types/Product';

class Api {
  async fetchData() {
    const doc = await getDocs(collection(db, 'products'));
    return this.normalizeData(doc);
  }
  async sortBy({ field, type }: OrderOption) {
    const q = await query(collection(db, 'products'), orderBy(field, type));
    const doc = await getDocs(q);
    return this.normalizeData(doc);
  }
  private normalizeData(data: QuerySnapshot): Product[] {
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
  }
}
export default new Api();
