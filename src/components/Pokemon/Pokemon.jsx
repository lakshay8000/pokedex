import "./Pokemon.css";
import {useNavigate} from "react-router-dom";

function Pokemon({name, image}) {
    const navigate= useNavigate();
    return (
        <div className="pokemon d-flex flex-column text-center" onClick= {() => navigate(`/pokemon/${name}`)}>
            <span className="pokemon-title"> {name} </span>

            <div className="pokemon-image-wrapper">
                <img src= {image} />
            </div>
        </div>
    )
}

export default Pokemon;