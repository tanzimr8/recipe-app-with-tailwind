import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context'
const Details = () => {
  const { recipeDetailsData, setRecipeDetailsData, favoritelists, handleAddToFavorite } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();
      console.log('recipe details: ', data.data.recipe);
      if(data.data.recipe){
        setRecipeDetailsData(data.data.recipe);
      } 
    }
    fetchRecipeDetails();
  },[id, setRecipeDetailsData]);
  if (!recipeDetailsData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={recipeDetailsData.image_url}
          alt="Shoes"
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{recipeDetailsData.title}</h2>
        <p>{recipeDetailsData.publisher}</p>
        <h2 className='font-bold'>Ingredients:</h2>
        <ul className="menu  w-56 ">
        {recipeDetailsData.ingredients && recipeDetailsData.ingredients.map((ingredient, index) => {
            return (
              <li key={index} className='bg-base-200 my-2'>
                {ingredient.quantity ?
                  (<p className=''><span className='capitalize font-bold'>{ingredient.description}</span>: {ingredient.quantity} {ingredient.units}</p>) : null}
              </li>
            )
          })}
      </ul>
        <div className="card-actions">
          <button onClick={()=>{handleAddToFavorite(recipeDetailsData)}} className="btn btn-primary">
            {favoritelists.findIndex(item => item.id === recipeDetailsData.id) === -1 ? 'Add to favorite' : 'Remove from favorites'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details


