import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Nav = () => {
  const Navigate = useNavigate();
    return (
        <div id='nav'>
          <div className="navContent">
            <div className="content">
              <button onClick={() => Navigate('/products')} >
                <div className="navItem">Produtos</div>
              </button>
              <button onClick={() => Navigate('/users')} >
                <div className="navItem">Usuários</div>
              </button>
            </div>
          </div>
        </div>
    )
}