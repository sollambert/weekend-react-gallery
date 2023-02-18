import useState from 'react';
import ImageItem from '../ImageItem/ImageItem';
import './ImageList.css'

function ImageList({images, addLike, deleteImage}) {
    // console.log(images)
    return (
        <div className="ImageList">
            {images.map((image) => {
                return <ImageItem key={image.id} img={image} deleteImage={deleteImage} addLike={addLike} />
            })}
        </div>
    )
}

export default ImageList;