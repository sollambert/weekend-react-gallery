import TextInput from "../Inputs/TextInput";
import FileInput from "../Inputs/FileInput";
import SubmitButton from "../Inputs/SubmitButton";
import {useState, useRef} from 'react';
import React from 'react';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import Stack from "@mui/material/Stack"

import './ImageForm.css'


function ImageForm({upload}) {

    const fileRef = useRef(null);
    const [nameBuffer, setNameBuffer] = useState('');
    const [descBuffer, setDescBuffer] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = (event) => {
        console.log('test')
        event.preventDefault();
        upload({name: nameBuffer, description: descBuffer}, file, clearInputs);
    }

    const handleNameBuffer = (event) => {
        setNameBuffer(event.target.value)
    }

    const handleDescBuffer = (event) => {
        setDescBuffer(event.target.value)
    }

    const handleUpload = (event) => {
        setFile(event.target.files[0]);
    }

    const clearInputs = () => {
        setNameBuffer('');
        setDescBuffer('');
        fileRef.current.value = null;
    }

    return (
        <form onSubmit={handleSubmit} action="/gallery" method="post" encType="multipart/form-data">
            <Stack className="input-stack" direction="row"spacing={1}>
                <TextField label="File Name" value={nameBuffer} onChange={handleNameBuffer} />
                <TextField label="Description" value={descBuffer} onChange={handleDescBuffer} />
            </Stack>
            <Stack className="input-stack" direction="row"spacing={1}>
                <Button color="success" variant="contained" type="submit">SUBMIT</Button>
                <Input type="file" inputRef={fileRef} onChange={handleUpload} />
            </Stack>
        </form>
    )
}

export default ImageForm;