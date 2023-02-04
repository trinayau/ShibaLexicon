import { createContext, useContext, useState } from "react";
import shiba from '../images/shiba.png';
import shibacool from '../images/shibacool.png';
import shibablush from '../images/shibablush.png';


const Context = createContext();

const ContextProvider = ({ children }) => {

    const [status, setState] = useState(false);
    const [image, setImage] = useState(shiba);
    const [dictStatus, setDictStatus] = useState(false);

    const handleClick = (req) => {
        const request = req;
        switch (request) {
            case "first":
                setState(prevStatus => !prevStatus);
                setImage(prevImage => prevImage === shiba ? shibacool : shiba);
                setDictStatus(false);
                break;
            case "dictionary":
                setState(prevStatus => !prevStatus);
                setImage(shibablush);
                setDictStatus(true);
                break;
            default:
                break;
        }
    }

    return (
        <Context.Provider value={{ status, setState, image, setImage, dictStatus, setDictStatus, handleClick }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Context);
}

export { ContextProvider}
