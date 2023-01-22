import {Outlet} from 'react-router-dom';
import {Footer} from '../components';
import './layout.css';
const Layout =() => {

return (
    <>
    <div className="backdrop">
  <p className="shapes">🍂</p>
  <p className="shapes">🐶</p>
    <p className="shapes">/</p>
</div>
<Outlet/>
<Footer/>


</>

);
}

export default Layout;

