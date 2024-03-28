import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import PokedexRoutes from './routes/PokedexRoutes';


function App() {
  return (
    <>
    <BrowserRouter>
    <PokedexRoutes />
    </BrowserRouter>
    </>
  )
}

export default App;