import React, { useContext } from 'react'
import { GlobalContext } from '../../../context'
import Recipe from './Recipe';
import Noresult from './Noresult';
import Error from './../../Error'
const Home = () => {
  const { recipeLists,loading,error } = useContext(GlobalContext);
  // console.log('recipe from home page', recipeLists)
  if (loading) return <div>Loading...Please wait!</div>;
  if (error) return <Error/>;
  return (
    <>
      <div className="flex flex-row items-center justify-center flex-wrap	gap-8">
        {recipeLists && recipeLists.length > 0 ? (recipeLists.map((recipe)=>{
          return <Recipe key={recipe.id} recipe={recipe}/>  
        })) : <Noresult text={'No recipes to show. Please search something!'}/>}
      </div>
    </>

  )
}

export default Home