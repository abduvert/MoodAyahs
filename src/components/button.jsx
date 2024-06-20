const Button = ({children,onClick,style}) =>{
    return (<div className='main'>
        <button className="btn btn-primary rounded-pill" onClick={onClick} style={style}>
        </button>
        <p>{children}</p>
    </div>);
}

export default Button