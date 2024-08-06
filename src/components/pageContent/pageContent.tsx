import './styles.scss';


type PageContentProps = {
  children: React.JSX.Element;
}

const PageContent = ({children}: PageContentProps) => {
  return (
    <div id="PageContent">
      <div className='pageHeader'>
        <p>Products</p>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export { PageContent };