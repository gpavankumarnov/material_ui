import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import FETCH_STATUS from "../../../core/stateManagement/FetchStatus";
import { productsListData } from "../model/productsList";
import { AppThunk } from "../../../core/stateManagement/store";
import poAPI from "../services/api";
import { RootState } from "@reduxjs/toolkit/query";

interface ProductsListSliceState {
    data:productsListData[] | null
    status: FETCH_STATUS
    error: string | null
}

const initialState: ProductsListSliceState = {
    data:[],
    status:FETCH_STATUS.PRISTINE,
    error:null
}

export const productsListSlice = createSlice({
    name:'productsList',
    initialState,
    reducers:{
         // Indicates fetch operation has started (Action creators)
         startFetchProductsList: (state) => {
            state.status =FETCH_STATUS.LOADING
         },
        // Handles successful fetch, updates state with new purchase orders
        finishFetchProductsList : (state, action:PayloadAction<productsListData>) => {
             state.data = action.payload   
             state.status = FETCH_STATUS.IDLE,
             state.error = null        
        },
        failHttpProductsList: (state, action: PayloadAction<string | null>) => ({
            ...state,
            status : FETCH_STATUS.IDLE,
            errorMessage : action.payload,
            data : null
          }),
    }
})


export const {startFetchProductsList, finishFetchProductsList,failHttpProductsList} = productsListSlice.actions

export const fetchProductsList = ():AppThunk => async (dispatch) => {
    try {
        const response = await poAPI.getProductsList();
        dispatch(finishFetchProductsList(response));
    } catch (error) {
        let errorMessage = 'An unknown error occured';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        dispatch(failHttpProductsList(errorMessage));
        await Promise.reject(errorMessage);
    }
}

export const ProductsListData = (state:RootState):productsListData[] | null => state.productsList.data

export default productsListSlice.reducer