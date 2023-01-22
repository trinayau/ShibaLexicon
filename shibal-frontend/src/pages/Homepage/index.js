import shiba from '../../images/shiba.png';
import shibacool from '../../images/shibacool.png';
import shibablush from '../../images/shibablush.png';
import './index.css';
import { DialogBox, Dictionary } from '../../components';
import {useState, useEffect} from 'react';

const Homepage = () => {
    const [status, setState] = useState(false);
    const [image, setImage] = useState(shiba);
    const [dictStatus, setDictStatus] = useState(false);

    const handleClick = (req) => {
        const request = req;
        switch(request){
            case "first":
                setState(prevStatus => !prevStatus);
                setImage(prevImage => prevImage === shiba ? shibacool : shiba);
                setDictStatus(false);
                break;
            case "dictionary":
                setState(prevStatus => !prevStatus);
                setImage( shibablush);
                setDictStatus(true);
                break;
        default:
            break;
    }
    }

    return ( <div className="container">
        <img src={image} alt="shiba" className='shiba' onClick={()=>handleClick('first')}/>
        <DialogBox status={status} handleClick={handleClick}/>
        <Dictionary dictStatus={dictStatus} />

    </div> );
}
 
export default Homepage;
