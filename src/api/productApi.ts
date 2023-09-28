import api from "./api";
import { URLS } from "./constants";

export interface ApiReturnProduct {
  name: string;

  slug: string;

  mainImage: string;

  images: string;

  description: string;

  category: string;

  seller: string;

  brand: string;

  size: string;

  color: string;

  tags: string;

  price: number;

  currency: string;

  priceDiscount: number;

  quantity: number;

  sold: number;

  isOutOfStock: boolean;

  ratingsAverage: number;

  ratingsQuantity: number;

  details: Record<string, any>;
}

export interface IAddProduct {
  name: string;

  description: string;

  category: string;

  brand: string;

  size: string;

  color: string;

  tags: string;

  price: number;

  newPrice: number;

  currency: string;

  quantity: number;

  details: Record<string, any>;
}

export const getProductsApi = async function () {
  try {
    return await api.get<ApiReturnProduct>(URLS.getProducts);
  } catch (error: any) {
    return error.response;
  }
};

export const addProductApi = async function (data: IAddProduct) {
  try {
    return await api.post<any>(URLS.addProducts, data);
  } catch (error: any) {
    return error.response;
  }
};
