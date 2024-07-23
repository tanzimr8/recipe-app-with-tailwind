import React, { useContext } from 'react'
import { GlobalContext } from '../../../context'

import Noresult from '../Home/Noresult';
import Recipe from '../Home/Recipe';


const Favorites = () => {
  const { favoritelists,loading } = useContext(GlobalContext);
  return (
    <>
      <div className="flex flex-row items-center justify-center flex-wrap	gap-8">
        {favoritelists && favoritelists.length > 0 ? (favoritelists.map((recipe)=>{
          return <Recipe key={recipe.id} recipe={recipe}/>  
        })) : <Noresult text={'Nothing is in Favorites'}/>}
      </div>
    </>

  )
}

export default Favorites