import './App.css';
import { useEffect, useState } from 'react';

import Books from './components/Books.jsx';
import Advice from './components/Advice.jsx';
import Weather from './components/Weather.jsx';
import PokemonComp from './components/PokemonComp.jsx';


/* above line 9 i am importing each component in order to send the data
 from the Ap.jsx (recieving the data from each api and then sending it to the cards
  in the component
  I am also importing the useEffect to be used for each API call*/


/* below is a function for the App*/
function App() {
  /* below i am setting up the variables for each useState which will be need later for the 
  useEffect and later for the data that the function will return back to the components as a prop */
  const [books, setBooks] = useState([]);
  const [adviceData, setAdviceData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [pokemon, setPokemon] = useState([]);


/* below are the useEffects going through each API call using the boiler plate code for useEffect
in each useEffect I am fetching data from the API call, connecting it to the variables for useState 
above, setting up to catch if there are any errors and sending it to the console. 
the empt bracts at the end is to hold space for the array coming from the api. 

the [] at the end is called an dependency array. It tells React when to run the code inside the effect
it also stops the useEffect from endlessly looping through the API and send sending that to the console. 
*/


  // useEffects Books
  useEffect(() => {
    fetch(
      'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=5'
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, []);

  // useEffects Advice
  useEffect(() => {
    fetch(
      'https://api.adviceslip.com/advice'
    )
      .then((res) => res.json())
      .then((data) => {
        setAdviceData(data.slip);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, []);


  // useEffects Weather
  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=37.77&longitude=-122.42&current_weather=true'
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data.current_weather);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, []);



    // useEffects Pokemon

  useEffect(() => {
    fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=5'
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, []);

  /* Below is the return statment telling the function that after setting up the variables, useState, and
  useEffect push the information to the DOM. 
  each API push to the dom is different but I will focus on the first:
  
  on line 86 I am maping out variable that contains the array of objects 
  .map is looping through each item in the array 
  Now using the arrow function we are doing the following with each loop of the book variable
  
  1)the books.map is looping through the list of books and sending it to the dom in the following way :
  2) through the key we are giving react a way to identtfy each componenet
  in the list and update the DOM (the cards showin on the webpage) 
  3) data={book} passes one boject from the API array sa a prop so
  the mapping function can access it. 
  
  */

  return (
    <div className="app">
      <h1>API Calls</h1>
      <div className="card-container">
      <h2>Harry Potter Books</h2>
        {books.map((book) => (
          <Books key={book.id} data={book} />
        ))}
      </div>

      <br></br>

      <div className="card-container">

        <Advice dataTwo={adviceData} />

      </div>
      <br></br>

      <div className="card-container">
        <Weather dataThree={weatherData} />

      </div>
      <br></br>

      <div className="card-container">
       
        <h2>Gotta Catch Them All! </h2>
        {pokemon.map((pokemons, index) => (
           <PokemonComp key={index} pokemonData={pokemons} />
           
           ))}
      
      </div>

    </div>
  );
}




// below you have to export the app so it can be used
export default App;




/*
The Directions:
//Make four different API calls and display the data back to the user
//Use a useEffect so the data is fetched when the user arrives at the site

//Google Books:
//https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=5
//Map over the data and show title and author for all 5 results


//News API:
//https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=YOUR_API_KEY
//Map over and show title and author for each item

//Advice Slip API
//https://api.adviceslip.com/advice
//Call the API and show the ID and advice back to the user

//Weather API
//https://api.open-meteo.com/v1/forecast?latitude=37.77&longitude=-122.42&current_weather=true
//Call the API and show the current temerature and current windspeed back to the user



*/