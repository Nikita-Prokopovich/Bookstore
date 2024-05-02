import './Title.css'; 

function Title ({children}: {children?: string}) {
  return (
    <div className="TitleBlock"> 
      <div className='TitleBlockContent'>
        <h1  className="TitleName">{children}</h1>
      </div>
    </div>
  );
};

export default Title;