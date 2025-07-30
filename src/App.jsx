import './App.css';
import { useEffect, useState } from 'react';

import Books from './components/Books.jsx';
import Advice from './components/Advice.jsx';




//Make four different API calls and display the data back to the user
//Use a useEffect so the data is fetched when the user arrives at the site

//Google Books:
//https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=5
//Map over the data and show title and author for all 5 results


function App() {
  const [books, setBooks] = useState([]);
  const [adviceData, setAdviceData] = useState([]);



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

    return (
      <div className="app">
        <h1>API Calls</h1>
        <div className="card-container">
        {books.map((book) => (
          <Books key={book.id} data={book} />
        ))}
        </div>

        <br></br>

        <div className="card-container">
        
          <Advice dataTwo={adviceData} />
      
        </div>
        <br></br>
    
      </div>
    );
  }


//News API:
//https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=YOUR_API_KEY
//Map over and show title and author for each item

//Advice Slip API
//https://api.adviceslip.com/advice
//Call the API and show the ID and advice back to the user

//Weather API
//https://api.open-meteo.com/v1/forecast?latitude=37.77&longitude=-122.42&current_weather=true
//Call the API and show the current temerature and current windspeed back to the user

export default App;
