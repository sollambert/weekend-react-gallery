import { useState } from 'react';
import './ImageItem.css';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function ImageItem({ img, addLike, deleteImage }) {

    const [display, setDisplay] = useState(true);

    const handleClick = () => {
        setDisplay(!display);
    }

    const handleLike = () => {
        addLike(img.id, img.likes + 1);
    }

    const handleDelete = () => {
        deleteImage(img.id);
    }

    return (
        <div className="ImageItem" >
            <div onClick={handleClick} className="image-container">
                {display ? <img src={img.path} ></img> : <div className="img-description">{img.description}</div>}
            </div>
            <Stack className="button-stack" direction="column" spacing={1}>
                <Button variant="contained" color="success" onClick={handleLike}>love it!</Button>
                <Button variant="outlined" color="error" onClick={handleDelete}>delete it!</Button>
            </Stack>
            {img.likes != 0 ?
            <p className="likes">{`${img.likes} people love this!`}</p>
            : <p className="likes">{`no one loves this :[`}</p>}
        </div>
    )
}

export default ImageItem;