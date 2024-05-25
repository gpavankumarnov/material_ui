import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { productsListData } from '../model/productsList'
import { useAppDispatch, useAppSelector } from '../../../core/stateManagement/hooks'
import { ProductsListData, fetchProductsList } from '../store/prodcutsListSlice'
const ProductsList = () => {

  // Use Redux hooks for dispatching actions and selecting state.
  const dispatch = useAppDispatch()
  const productsData = useAppSelector(ProductsListData)

    useEffect(() => {
        dispatch(fetchProductsList())
    }, [dispatch])

    const commonConfigOnColumns = {
      flex: 1,
      minWidth: 220,
      pinnable: false,
      hideable: false,
      sortable: false,
      editable: false,
      filterable: false,
      groupable: false
    }
    const columns:GridColDef<productsListData>[] = [
        {field:'id', headerName:'ID',  ...commonConfigOnColumns},
        {field:'name', headerName:'Name', ...commonConfigOnColumns},
        {field:'username', headerName:'Username',...commonConfigOnColumns },
        {field:'email', headerName:'Email',...commonConfigOnColumns},
        {field:'website', headerName:'Website',...commonConfigOnColumns},
    ]
   

 // Transform productsData to match the expected type
 const rows = productsData || []; // If productsData is null, assign an empty array


  return (
    <div>
      <DataGrid columns={columns} rows={rows}/>
    </div>
  )
}

export default ProductsList
