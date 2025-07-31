function Weather({dataThree}) {
  
    return (
      <div className="app">
        <h2>Weather Data</h2>
        <div
          className="card-container"
          style={{
            border: '.5rem solid #4D8EAB',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
         
            <div className="card" >
              <h2>Temperature: {dataThree.temperature}</h2>
              <h2>Windspeed: {dataThree.windspeed}</h2>
            </div>
          
        </div>
      </div>
    );
  }






export default Weather;

