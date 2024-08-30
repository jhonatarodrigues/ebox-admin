import { Button } from '@mui/material';
import './styles.scss';


type PageContentProps = {
  children: React.JSX.Element;
  title: string;

  addLabel?: string;
  onPressAddButton?: () => void;
}

const PageContent = ({children, title, addLabel, onPressAddButton}: PageContentProps) => {
  return (
    <div id="PageContent">
      <div className='pageHeader'>
        <p>{title}</p>

        {addLabel && onPressAddButton && (
          <Button variant="contained" color="primary" onClick={onPressAddButton}>
            {addLabel}
          </Button>
        )}
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export { PageContent };