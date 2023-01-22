import {Outlet} from 'react-router-dom';
import './layout.css';
const Layout =() => {

return (
    <>
    <div class="backdrop">
  <p class="shapes">🍂</p>
  <p class="shapes">🐶</p>
    <p class="shapes">/</p>
</div>
<Outlet/>


</>

);
}

export default Layout;

