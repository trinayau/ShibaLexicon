import shiba from '../../images/shiba.png';
import shibacool from '../../images/shibacool.png';
import shibablush from '../../images/shibablush.png';
import './index.css';
import { DialogBox, Dictionary } from '../../components';
import {useState, useEffect} from 'react';
import {useGlobalContext} from '../../context/Context';

const Homepage = () => {
    
    
    const {handleClick, status, image, dictStatus} = useGlobalContext();

    return ( <div className="container">
        <img src={image} alt="shiba" className='shiba' onClick={()=>handleClick('first')}/>
        <DialogBox status={status} handleClick={handleClick}/>
        <Dictionary dictStatus={dictStatus} />

    </div> );
}
 
export default Homepage;
