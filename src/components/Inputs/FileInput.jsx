function FileInput({setFile}) {
    return (
        <>
            <label htmlFor="image"></label>
            <input onChange={setFile} name="image" type="file" accept="image/*" />
        </>
    )
}

export default FileInput;