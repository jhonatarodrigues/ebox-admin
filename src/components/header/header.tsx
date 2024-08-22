import { Button } from '@mui/material'
import './styles.scss'
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
  const {logout} = useAuth();
  
    return (
        <div className='header'>
          <p className="nameUser">
            <span>Olá, </span>
            <span className="name">Usuário</span>

            <Button variant="outlined" color='inherit' size='small' onClick={logout}>Sair</Button>
          </p>
        </div>
    )
}