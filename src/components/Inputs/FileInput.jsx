function FileInput({setFile, fileRef}) {
    return (
        <>
            <label htmlFor="image"></label>
            <input onChange={setFile} ref={fileRef} name="image" type="file" accept="image/*"/> 
        </>
    )
}

export default FileInput;