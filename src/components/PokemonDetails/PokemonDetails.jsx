import "./PokemonDetails.css";

function PokemonDetails({pic, id, name, exp, height, order, weight}) {
    return (
        <div className="pokemon-details-wrapper d-flex flex-column">
            <div className="pokemon-details-img">
                <img src= {pic} />
            </div>
            <div className="pokemon-details d-flex flex-column">
                <div> Id - {id} </div>
                <div> Name - {name} </div>
                <div> Base Experience - {exp} </div>
                <div> Height - {height} </div>
                <div> Order - {order} </div>
                <div> Weight - {weight} </div>
            </div>
        </div>
    )
}

export default PokemonDetails;