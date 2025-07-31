//Advice Slip API
//https://api.adviceslip.com/advice
//Call the API and show the ID and advice back to the user

function Advice({dataTwo}) {
    
  
    return (
      <div className="app">
        <h2>Advice</h2>
        <div
          className="card-container"
          style={{
            border: '.5rem dashed #C586C0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
            <div className="card">
              <h2>{dataTwo.advice}</h2>
              
            
            </div>
      
        </div>
      </div>
    );
  }
  

export default Advice;


