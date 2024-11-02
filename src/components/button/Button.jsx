function Button({children,className}){
    return(
        <>
        <button className={`text-white px-4 py-2 rounded text-xl font-bold ${className}`}>
        {children}
        </button>
        </>
    )
}

export default Button