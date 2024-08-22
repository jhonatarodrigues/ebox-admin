import { Button } from '@mui/material'
import './styles.scss'
import { useAuth } from '@/hooks/useAuth';
import useAuthStore from '@/hooks/store/useAuthStore';

export const Header = () => {
  const {logout} = useAuth();
  const { user } = useAuthStore((state) => state);
  
    return (
        <div className='header'>
          <p className="nameUser">
            <span>Olá, </span>
            <span className="name">{user?.name}</span>

            <Button variant="outlined" color='inherit' size='small' onClick={logout}>Sair</Button>
          </p>
        </div>
    )
}