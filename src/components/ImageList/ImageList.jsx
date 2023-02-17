import useState from 'react';
import ImageItem from '../ImageItem/ImageItem';
import './ImageList.css'

function ImageList({images, addLike}) {
    return (
        <div className="ImageList">
            {images.map((image) => {
                return <ImageItem key={image.id} img={image} addLike={addLike}/>
            })}
        </div>
    )
}

export default ImageList;