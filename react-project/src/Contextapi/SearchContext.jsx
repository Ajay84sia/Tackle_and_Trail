import React, { Children } from "react"
import { createContext } from "react"
import { useState } from "react"
export  const SearchContext=createContext()
 export const SearchContextProvider=({children})=>{
  
    const[search,setSearch]=useState("")

    return(
        <SearchContext.Provider value={{search,setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}