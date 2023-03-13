function Alert({message, type}){
    const classname = `alert alert--${type}`;
    return (
        <div className={classname}>
            {message}
        </div>
    )
}

export default Alert;