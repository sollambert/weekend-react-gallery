import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import ImageList from '../ImageList/ImageList';
import ImageForm from '../ImageForm/ImageForm';

function App() {

  const [images, setImages] = useState([]);

  const uploadImage = (fileInfo, file, cb) => {
    let formData = new FormData();
    formData.append('name', fileInfo.name);
    formData.append('description', fileInfo.description);
    formData.append('file', file);
    axios.post('/gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      getImages();
      cb();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  const getImages = () => {
    axios.get('/gallery')
      .then((response) => {
        setImages(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const addLike = (id, likes) => {
    axios.put(`/gallery/like/${id}`, {likes})
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
      <ImageForm upload={uploadImage} />
      <ImageList images={images} addLike={addLike}/>
    </div>
  );
}

export default App;
