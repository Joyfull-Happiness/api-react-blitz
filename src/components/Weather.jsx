function Weather({WeatherData}) {
  
    return (
      <div className="app">
        <h2>Weather Data</h2>
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
         
            <div className="card" key={WeatherData.id}>
              <h2>{WeatherData.volumeInfo.title}</h2>
              <h2>{WeatherData.volumeInfo.authors}</h2>
            </div>
          
        </div>
      </div>
    );
  }






export default Weather;

