// import logo from './logo.svg';
// import './App.css';
import BookSearch from './BookSearch';
import DATA from './books';

function App() {
  return (
    <main>
    <BookSearch books={DATA}/>
  </main>

  );
}

export default App;
