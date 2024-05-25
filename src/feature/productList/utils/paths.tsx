import { PRODUCTS_LIST_API_URL } from "../../../Constants"


export const PRODUCTS_LIST_URL = `${PRODUCTS_LIST_API_URL}/products_list`



//returns an urls
const paths = {
    getPurchaseOrders : ():string => `https://jsonplaceholder.typicode.com/users`
}

export default paths;