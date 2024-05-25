import { productsListResponse } from "./productsListResponse"

export interface productsListData  {
  id:string,
  name:string,
  username:string,
  email:string,
  website:string
}


export const fromProductsListResponse = (r:productsListResponse):productsListData => ({
  id:r.id,
  name:r.name,
  username:r.username,
  email:r.email,
  website:r.website
})