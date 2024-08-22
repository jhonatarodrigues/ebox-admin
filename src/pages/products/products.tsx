import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useProducts } from '@/hooks/business/useProducts';
import { useEffect, useState } from 'react';
import { ProductsModel } from '@/model/products';

export const Products = () => {
  const { getProducts } = useProducts();

  const [products, setProducts] = useState<ProductsModel[]>([]);
  

  const columns: GridColDef<(typeof products)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90, },
    {
      field: 'title',
      headerName: 'Titulo',
      width: 200,
    },
    {
      field: 'description',
      headerName: 'Descrição',
      width: 300,
    },
    
  ];

  

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

 
  
  return (
    <BasePage>
      <PageContent >
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </PageContent>
    </BasePage>
  )
}