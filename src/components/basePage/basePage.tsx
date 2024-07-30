import { Header } from '@/components/header/header';
import './styles.scss';
import { Nav } from '@/components/nav';


type BasePageProps = {
    children: React.JSX.Element;
}

export const BasePage = ({children}: BasePageProps) => {
    return (
        <div id='basePage'>
          <Header />
          <div className="baseContent">
            <Nav />
            <div className="content">
              {children}
            </div>
          </div>
        </div>
    )
}