import './App.css';
import './components/BookFunc.jsx';
import { useEffect, useState } from 'react';

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

export default App;
