import {Product} from '../models/product'
import axiosClient from './config'

export const getAll =  ():Promise<Product[]>=>{
return axiosClient.get("/product")
} 
export const remove =  (id:string):Promise<Product>=>{
return axiosClient.delete(`/product/${id}`)
} 
export const add = (product: Product): Promise<Product> => {
    return axiosClient.post("/product", product);
  };
  export const get = (id?:string):Promise<Product>=>{
    return axiosClient.get(`/product/${id}`)
  }
export const update = (product: Product): Promise<Product> => {
    return axiosClient.put(`/product/${product._id}`, product);
  };
  
