import './styles.scss'

export const Header = () => {
    return (
        <div className='header'>
          <p className="nameUser">
            <span>Olá, </span>
            <span className="name">Usuário</span>
          </p>
        </div>
    )
}