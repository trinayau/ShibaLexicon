import shiba from '../../images/shiba.png';
import './index.css';

const Homepage = () => {
    return ( <div className="homepage-container">
        <h1>ShibaLexicon</h1>
        <img src={shiba} alt="shiba" className='shiba'/>
    </div> );
}
 
export default Homepage;
