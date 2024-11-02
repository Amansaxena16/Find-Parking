function Button({children,className,onClick}){
    return(
        <>
        <button className={`text-white px-4 py-2 rounded text-xl font-bold ${className}`} onClick={onClick}>
        {children}
        </button>
        </>
    )
}

export default Button