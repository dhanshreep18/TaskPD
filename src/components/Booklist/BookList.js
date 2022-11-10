import React, { useState } from "react";
import books from "./books";
import BookCard from "./BookCard";
import './booklist.css';
import Buttons from "./Buttons";
import { Box, Grid } from '@mui/material';

 
const App = () => {
  const [item, setItem] = useState(books);
  const [searchI, setSearchI] = useState(false);
  const [filterI, setFilterI] = useState(false);
  const menuItems = [...new Set(books.map((Val) => Val.subject))];

  const filterItem = (sub) => {
    const updatedItem = books.filter((currElem)=>{
      return currElem.subject === sub;
    });
    setItem(updatedItem);
    setFilterI(true);
  }

  const [query, setQuery] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const search = (data)=>{
    return data.filter((itemi)=> itemi.name.toLowerCase().includes(query));
  };

  const filteredBooks = books.filter(
    book => {
      return (
        book
        .name
        .toLowerCase()
        .includes(query.toLowerCase()) ||
        book
        .author
        .toLowerCase()
        .includes(query.toLowerCase())
      );
    }
  );

  const handleChange = e=>{
    setQuery(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else{
      setSearchShow(true);
    }
  }

  function searchList(){
    if(searchShow){
      return (
        <BookCard item = {filteredBooks}/>
      );
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="searchComp">
            <input
              type="text"
              placeholder="Search Author or Book Name..."
              className="search"
              onChange={handleChange}
            />
            <button className="my-button btn btn-warning" onClick={()=>searchList}><i className= "iconS" style={{padding:'10px'}} class="bi bi-search fa"></i></button>
          </div>

          {/* <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
              <button className="my-button btn btn-primary" onClick={()=>filterItem('science')}>Science</button>
              <button className="my-button btn btn-primary" onClick={()=>filterItem('chemistry')}>Chemistry</button>
              <button className="my-button btn btn-primary" onClick={()=>filterItem('physics')}>Physics</button>
              <button className="my-button btn btn-primary" onClick={()=>filterItem('maths')}>Maths</button>
              <button className="my-button btn btn-primary" onClick={()=>filterItem('biology')}>Biology</button>
            </div>
          </div> */}
          
          <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
              <Buttons
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
              />
            </div>
          </div>

          <div className="list">
            <BookCard className="myUL" item={filteredBooks}/>
          </div>
          
          
        </div>
      </div>
    </>
  );
};
 
export default App;