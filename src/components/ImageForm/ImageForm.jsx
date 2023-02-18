import TextInput from "../Inputs/TextInput";
import FileInput from "../Inputs/FileInput";
import SubmitButton from "../Inputs/SubmitButton";
import {useState} from 'react';


function ImageForm({upload}) {

    const [nameBuffer, setNameBuffer] = useState('');
    const [file, setFile] = useState(null);

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
        setValue('');
        setFile(null);
    }

    return (
        <form onSubmit={handleSubmit} action="/gallery" method="post" encType="multipart/form-data">
            <TextInput name="File Name" value={nameBuffer} setValue={handleNameBuffer} placeholder="Enter file name..." />
            <FileInput setFile={handleUpload}/>
            <SubmitButton/>
        </form>
    )
}

export default ImageForm;