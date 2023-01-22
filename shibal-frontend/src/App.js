import {Routes, Route, Navigate} from 'react-router-dom';
import { Homepage } from "./pages";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
