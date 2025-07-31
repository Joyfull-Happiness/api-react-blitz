//Advice Slip API
//https://api.adviceslip.com/advice
//Call the API and show the ID and advice back to the user

/* 
below is the Advice function a child component whwich is passing through the prop dataTwo 
dataTwo is a prop from the APP.jsx file that passes through the data from the API call in the App.jsx
to this function 

then we are reurning to the DOM the html and css and what information we want to pass through 
( <h4>{dataTwo.advice}</h4>) in this line we are saying we only want teh advice to be shown to 
the user from the API call in the APP.jsx

 */

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
              <h4>{dataTwo.advice}</h4>
              
            
            </div>
      
        </div>
      </div>
    );
  }
  

export default Advice;


