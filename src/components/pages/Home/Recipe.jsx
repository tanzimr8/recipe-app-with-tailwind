import React from 'react'
import { Link } from 'react-router-dom'
const Recipe = ({recipe}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={recipe.image_url}
                    alt={recipe.title}
                    className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {recipe.publisher}
                    {/* <div className="badge badge-accent">Favorites +</div> */}
                </h2>
                <p>{recipe.title}</p>
                <div className="card-actions justify-start py-3">
                    <Link to={`/details/${recipe.id}`}><button className="btn btn-accent">Show Details</button></Link>
                    <button className="btn btn-accent">Add to favorite</button>

                </div>
            </div>
        </div>
    )
}

export default Recipe