import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();
const GlobalState = ({children}) => {
  const [searchInput, setSearchInput] = useState('');
  const  handleSearch = (event)=>{
    event.preventDefault();
  }
  return (
    <GlobalContext.Provider
    value={{searchInput, setSearchInput,handleSearch}}
    >{children}</GlobalContext.Provider>
  )
}

export default GlobalState