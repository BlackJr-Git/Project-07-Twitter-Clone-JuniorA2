
function Button({texte, className, handleClick}) {
    return (
        <button onClick={handleClick} className={className} type="submit"> {texte} </button>
    )
}

export default Button ;