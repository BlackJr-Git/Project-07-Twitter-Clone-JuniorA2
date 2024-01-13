
function Button({texte, className, handleClick}) {
    return (
        <button onClick={handleClick} className={className}> {texte} </button>
    )
}

export default Button ;