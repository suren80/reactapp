import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from "./components/ImageList";
// Commeted code for git commit


function App() {
  const [images, setImages] = useState([]);

  const addSubmit = async (term) =>{
    //console.log('Search Item : ',term);
    const responseValue = await searchImages(term);
    console.log(responseValue);
    setImages(responseValue);
  };

  return (
    <div>
     <SearchBar onSubmit={addSubmit} />
     <ImageList images={images}/>
    </div>
  );
}

export default App;
