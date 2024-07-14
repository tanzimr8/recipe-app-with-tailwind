import React, { createContext } from 'react'

const GlobalContext = createContext(null);
const GlobalState = ({children}) => {
  return (
    <GlobalContext.Provider>{children}</GlobalContext.Provider>
  )
}

export default GlobalState