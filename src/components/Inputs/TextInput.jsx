function TextInput({name, value, setValue, placeholder}) {
    return (
        <>
            <label htmlFor={name}>{name}: </label>
            <input name={name} type="text" placeholder={placeholder} value={value} onChange={setValue} />
        </>
    )
}

export default TextInput;