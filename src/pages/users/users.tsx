import { BasePage } from '@/components/basePage/basePage';
import './users.styles.scss';
import { PageContent } from '@/components/pageContent/pageContent';
import { DataGrid, GridActionsCellItem, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { useUser } from '@/hooks/business/useUser';
import { useEffect, useState } from 'react';
import { UserModel } from '@/model/user';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Users = () => {
  const navigate = useNavigate();
  const {getUsers, deleteUser} = useUser();
  const [users, setUsers] = useState<UserModel[]>([]);

  const handleOpenModalDelete = ({id, name} : {id: string, name: string}) => {    
    Swal.fire({
      title: `Você quer mesmo deletar ${name} ?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não`,
    }).then((result) => {
      Swal.isLoading();
      if (result.isConfirmed) {
        deleteUser(Number(id)).then(() => {
          Swal.fire('Deletado com sucesso!', '', 'success').then(() => {
            getUsers().then((response) => {
              setUsers(response);
            });
          });
        }).catch(() => {
          Swal.fire('Erro ao deletar, tente novamente mais tarde', '', 'error');
        });
      } 
    });
    
  }

  const columns: GridColDef<(typeof users)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      headerName: 'email',
      flex: 1,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'name',
      flex: 1,
      editable: true,
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
            icon={<GridDeleteIcon />}
            label="Delete"
            onClick={() => handleOpenModalDelete({id: String(row.id), name: row.name})}
            color="inherit"
          />,
        ];
      },
    },
    
    
  ];

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);
  
    return (
      <BasePage>
        <PageContent title='users' addLabel='Add User' onPressAddButton={() => navigate("/users/add", ) }>
          <DataGrid
            rows={users}
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