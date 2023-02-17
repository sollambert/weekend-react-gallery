import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import ImageList from '../ImageList/ImageList';

function App() {

  const [images, setImages] = useState([]);

  const getImages = () => {
    axios.get('/gallery')
      .then((response) => {
        setImages(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const addLike = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then((response) => {
      getImages();
    })
    .catch((err) => {
      console.error(err);
    }); 
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <ImageList images={images} addLike={addLike}/>
      {/* <img src="images/goat_small.jpg" /> */}
    </div>
  );
}

export default App;
