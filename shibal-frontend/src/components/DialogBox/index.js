import './index.css';

const DialogBox = ({status, handleClick}) => {
    return ( <div className="container">
        {status && (
        <div className="dialog-box base" id="dialogue">
            <div className="dialog-box__header">
                <h2 className="dialog-box-title">What can I do for you, my friend?</h2>
            </div>
            <div className="dialog-box-controls">
            <button className="game-button orange" onClick={()=> handleClick('dictionary')}>Dictionary</button>
               
                <button className="game-button red" onClick={()=> handleClick('first')}>Close</button>
            </div>
        </div>
        )}


    </div> );
}
 
export default DialogBox;
