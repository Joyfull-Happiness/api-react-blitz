//News API:
//https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=YOUR_API_KEY
//Map over and show title and author for each item

function BookFunc() {
    const [books, setBooks] = useState([]);
  
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
  
    return (
      <div className="app">
        <h1>Harry Potter Books</h1>
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
          {books.map((book) => (
            <div className="card" key={book.volumeInfo}>
              <h2>{book.volumeInfo.title}</h2>
  
              <h2>{book.volumeInfo.authors}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  

export default NewsFunc;