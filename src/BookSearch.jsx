import React, { useState, useEffect } from "react";

const BookSearch = (props) => {
  const { books } = props;
  const [refresh, _setRefresh] = useState(books);
  const [results, setSearchResults] = useState(books);
  const [_searchParams, setSearchParams] = useState({
    author: '',
    title: '',
    country: '',
    language: '',
    year: ''
  });
  
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchParams((prevState) => {
       const newData = { ...prevState, [e.target.name] : e.target.value }; 
       searchBooks(newData);
       return newData;
    })
  }
  
  const searchBooks = (data) => {
    const { author, title, country, language, year} = data;

    if(author && title && country && language && year){

        setSearchResults(results.filter(item => {
            return item.author.toLowerCase().includes(author.toLowerCase()) 
            || item.author.toLowerCase().includes(author.toLowerCase())
            || item.country.toLowerCase().includes(country.toLowerCase())
            || item.language.toLowerCase().includes(language.toLowerCase())
            || String(item.year).includes(String(year))
         }))
 
    }else if(author || title || country || language || year){

        if(author){
            setSearchResults(results => results.filter(item => item.author.toLowerCase().includes(author.trim().toLowerCase())))
        }
      
        if(title){
            setSearchResults(results => results.filter(item => item.title.toLowerCase().includes(title.trim().toLowerCase())));
        }
    
        if(country){
            setSearchResults(results => results.filter(item => item.country.toLowerCase().includes(country.trim().toLowerCase())));
        }

        if(language){
            setSearchResults(results => results.filter(item => item.language.toLowerCase().includes(language.trim().toLowerCase())))
        }
    
        if(year){
            setSearchResults(results => results.filter(item => String(item.year).includes(String(year))))
        }      

    }else{
        setSearchResults(refresh);   
    }
        
  }
    
  useEffect(() => {
    setSearchResults(books);
  },[JSON.stringify(books)]);
  
  return (
    <>
      <input data-testid="author" name={"author"} onChange={handleOnChange} placeholder={"author"} />
      <input data-testid="title" name={"title"} onChange={handleOnChange} placeholder={"title"} />
      <input data-testid="country" name={"country"} onChange={handleOnChange} placeholder={"country"} />
      <input data-testid="language" name={"language"} onChange={handleOnChange} placeholder={"language"} />
      <input data-testid="year" name={"year"} onChange={handleOnChange} placeholder={"year"} />
      
      {
        results.map((item, index) => (
        <div key={index} data-testid={"book"} style={{border: '1px solid black', padding: 5, marginBottom: 2}}>
            <p>author  {item.author}</p>
            <p>country {item.country}</p>
            <p>language {item.language}</p>
            <p>pages {item.pages} </p>
            <p>title {item.title} </p>
            <p>year {item.year} </p>
        </div>))
      }
    </>
  );
};

export default BookSearch;