//News API:
//https://pokeapi.co/api/v2/pokemon?limit=5
//Map over and show title and author for each item

function PokemonComp({pokemonData}) {
    
  
    return (
      <div className="app">
      
        <div
          className="card-container"
          style={{
            border: '.5rem double #FFCC01',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <div className="card">
            <h2>{pokemonData.name}</h2>
           
          </div>
        </div>
      </div>
    );
  }
  
  

export default PokemonComp;