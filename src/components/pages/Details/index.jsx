import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context'
const Details = () => {
  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);
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
          {recipeDetailsData.ingredients.map((ingredient)=>{
          return (<li className='bg-base-200 my-2'>
            <p>{ingredient?.description}: {ingredient?.quantity} {ingredient?.units}</p>
          </li>)
          })}
      </ul>
        <div className="card-actions">
          <button className="btn btn-primary">Add to favorites</button>
        </div>
      </div>
    </div>
  )
}

export default Details


