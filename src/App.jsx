import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import PokedexRoutes from './routes/PokedexRoutes';
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className='app-wrapper'>
        <BrowserRouter>
            <Navbar />
            <PokedexRoutes />
        </BrowserRouter>
    </div>
  )
}

export default App;