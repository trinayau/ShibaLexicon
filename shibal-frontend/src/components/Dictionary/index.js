const Dictionary = ({dictStatus}) => {
    return ( 
        <div className="container dictionary">
            {dictStatus &&
            (
        <h2 className="dialog-box">Dictionary</h2>
            )
            }

    </div> );
}
 
export default Dictionary;
