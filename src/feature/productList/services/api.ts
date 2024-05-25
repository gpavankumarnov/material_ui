import { fromProductsListResponse, productsListData } from './../model/productsList';
import axios from 'axios';
import paths from '../utils/paths';
const poAPI = {
    getProductsList : async()=>{
        const response = await axios.get<productsListData>(paths.getPurchaseOrders())
        console.log("response", response);
        return fromProductsListResponse(response.data)
    }
}

export default poAPI