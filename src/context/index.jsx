import React, { createContext, useState } from 'react'
//CONTEXT CREATION
export const GlobalContext = createContext();
const GlobalState = ({children}) => {
  //DECLARING ALL STATES
  const [searchInput, setSearchInput] = useState('');
  const [recipeLists,setRecipeLists] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  
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
      }
    }
    catch(e){
      setError(e);
      setLoading(false);
      setSearchInput('');
    }
  }
  
  return (
    //PROVIDE THE CONTEXT
    <GlobalContext.Provider
    value={{searchInput, setSearchInput,handleSearch,recipeLists,setRecipeLists}}
    >{children}</GlobalContext.Provider>
  )
}

export default GlobalState