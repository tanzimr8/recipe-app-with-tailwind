import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context'
const Details = () => {
  const {recipeDetailsData,setRecipeDetailsData} = useContext(GlobalContext)
  const {id} = useParams();
  
  return (
    <div>Details</div>
  )
}

export default Details