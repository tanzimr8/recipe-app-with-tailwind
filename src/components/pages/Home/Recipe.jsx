import React from 'react'

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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to favorite</button>
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
        </div>
    )
}

export default Recipe