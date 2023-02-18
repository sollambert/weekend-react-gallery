import TextInput from "../Inputs/TextInput";
import FileInput from "../Inputs/FileInput";
import SubmitButton from "../Inputs/SubmitButton";
import {useState, useRef} from 'react';
import React from 'react';


function ImageForm({upload}) {

    const fileRef = useRef(null);
    const [nameBuffer, setNameBuffer] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = (event) => {
        console.log('test')
        event.preventDefault();
        upload(nameBuffer, file, clearInputs)
    }

    const handleNameBuffer = (event) => {
        setNameBuffer(event.target.value)
    }

    const handleUpload = (event) => {
        setFile(event.target.files[0]);
    }

    const clearInputs = () => {
        setNameBuffer('');
        fileRef.current.value = null;
    }

    return (
        <form onSubmit={handleSubmit} action="/gallery" method="post" encType="multipart/form-data">
            <TextInput name="File Name" value={nameBuffer} setValue={handleNameBuffer} placeholder="Enter file name..." />
            <FileInput fileRef={fileRef} setFile={handleUpload} value={file} />
            <SubmitButton/>
        </form>
    )
}

export default ImageForm;