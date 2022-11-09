import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import BookList from './components/Booklist/BookList'

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <div style={{align: 'center'}}>
      <BookList/>
      </div>
      
    </div>
  );
}

export default App;
