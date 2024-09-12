import { BasePage } from '@/components/basePage/basePage';
import './styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { useProducts } from '@/hooks/business/useProducts';
import { useEffect, useState } from 'react';
import { ProductsModel } from '@/model/products';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Swal from 'sweetalert2';


export const Products = () => {
  const navigate = useNavigate();
  const { getProducts, deleteProducts } = useProducts();


  const [products, setProducts] = useState<ProductsModel[]>([]);


  const handleOpenModalDelete = ({id, title} : {id: string, title: string}) => {    
    
    Swal.fire({
      title: `Você quer mesmo deletar ${title} ?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não`,
    }).then((result) => {
      Swal.isLoading();
      if (result.isConfirmed) {
        deleteProducts(Number(id)).then(() => {
          Swal.fire('Deletado com sucesso!', '', 'success').then(() => {
            getProducts().then((response) => {
              setProducts(response);
            });
          });
        }).catch(() => {
          Swal.fire('Erro ao deletar, tente novamente mais tarde', '', 'error');
        });
      } 
    });
    
  }


  const columns: GridColDef<(typeof products)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90, },
    {
      field: 'title',
      headerName: 'Titulo',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Descrição',
      flex: 1,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 120,
      cellClassName: 'actions',
      getActions: ({row}) => {
        
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => navigate(`/products/add`, {state: {id: row.id}})}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleOpenModalDelete({id: String(row.id), title: row.title})}
            color="inherit"
          />,
        ];
      },
    },
    
  ];

  

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

 
  
  return (
    <BasePage>
      <PageContent title="products" addLabel='Add Products' onPressAddButton={() => navigate("/products/add", ) } >
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
          disableRowSelectionOnClick
        />
      </PageContent>
    </BasePage>
  )
}