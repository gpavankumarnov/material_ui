import { Action, ThunkAction, combineSlices, configureStore } from "@reduxjs/toolkit";
import {productsListSlice} from "../../feature/productList/store/prodcutsListSlice";



const rootReducer = combineSlices(productsListSlice)

export type RootState = ReturnType<typeof rootReducer>

// //Entire application store
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware()
//       },
// })


// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  // todo to investigate
  // setupListeners(store.dispatch)
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
    },
    preloadedState
  })
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store


export type AppDispatch = AppStore['dispatch']

export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>
