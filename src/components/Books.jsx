
function Books({data}) {
  
  return (
    <div className="app">
     
      <div
        className="card-container"
        style={{
          border: '.5rem solid #000000',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
       
          <div className="card" key={data.id}>
            <h2>{data.volumeInfo.title}</h2>
            <h2>{data.volumeInfo.authors}</h2>
          </div>
        
      </div>
    </div>
  );
}

export default Books;
