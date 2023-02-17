import { useState } from 'react';
import './ImageItem.css';

function ImageItem({ img, addLike }) {

    const [display, setDisplay] = useState(true);

    const handleClick = () => {
        setDisplay(!display);
    }

    const handleLike = () => {
        addLike(img.id);
    }

    return (
        <div className="ImageItem" >
            <div onClick={handleClick} className="image-container">
                {display ? <img src={img.path} ></img> : <div className="img-description">{img.description}</div>}
            </div>
            <button onClick={handleLike}>love it!</button>
            {img.likes != 0 ?
            <p className="likes">{`${img.likes} people love this!`}</p> : <p className="likes">{`no one loves this :[`}</p>}
        </div>
    )
}

export default ImageItem;