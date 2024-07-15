import React, { useContext } from 'react'
import { GlobalContext } from '../../../context'
import Recipe from './Recipe';
import Noresult from './Noresult';
const Home = () => {
  const { recipeLists } = useContext(GlobalContext);
  // console.log('recipe from home page', recipeLists)
  return (
    <>
      <div className="flex flex-row items-center justify-center flex-wrap	gap-8">
        {recipeLists && recipeLists.length > 0 ? (recipeLists.map((recipe)=>{
          return <Recipe key={recipe.id} recipe={recipe}/>  
        })) : <Noresult/>}
      </div>
    </>

  )
}

export default Home