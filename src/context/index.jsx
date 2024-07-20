import React, { createContext, useState } from 'react'
//CONTEXT CREATION
export const GlobalContext = createContext();
const GlobalState = ({children}) => {
  //DECLARING ALL STATES
  const [searchInput, setSearchInput] = useState('');
  const [recipeLists,setRecipeLists] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favoritelists, setFavoritelists] = useState([]);
  //HANDLE ON SUBMIT ON THE SEARCH FORM
  const handleSearch = async (event)=>{
    event.preventDefault();
    try{
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}`);
      const data = await response.json();
      if(data?.data?.recipes){
        setRecipeLists(data?.data?.recipes);
        setSearchInput('');
        setError(false);
        setLoading(false);
        // console.log('recipeLists: ',recipeLists)
      }
    }
    catch(e){
      setError(e);
      setLoading(false);
      setSearchInput('');
    }
  }
  const handleAddToFavorite = (getRecipe)=>{
    console.log('RECIPE FROM FAV:',getRecipe);
    const copyOfFavList = [...favoritelists];
    const index = copyOfFavList.findIndex((item)=>{
      return item.id === getRecipe.id;
    })
    if(index === -1){
      copyOfFavList.push(getRecipe);
    }
    else{
      copyOfFavList.splice(index);
    }
    setFavoritelists(copyOfFavList);
  }
  return (
    //PROVIDE THE CONTEXT
    <GlobalContext.Provider
    value={{searchInput, setSearchInput,handleSearch,recipeLists,setRecipeLists,loading,recipeDetailsData,setRecipeDetailsData,handleAddToFavorite}}
    >{children}</GlobalContext.Provider>
  )
}

export default GlobalState