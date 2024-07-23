import React, { useContext } from 'react'
import {GlobalContext} from '../../../context';
const Search = () => {
    const {searchInput, setSearchInput,handleSearch} = useContext(GlobalContext);
    return (
        <>
            <div className="py-16 lg:px-32 max-auto flex flex-col w-full items-center justify-center">
                <h2 className='py-4 text-center font-bold text-2xl'>Search your favorite recipes here...</h2>
                <form onSubmit={handleSearch} className="w-full form-control flex flex-row justify-center gap-4">
                    <label className=" input input-bordered border-2 border-black flex items-center w-2/3 ">
                        <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} className="grow" placeholder="Search" />
                    </label>
                    <div className="">
                        <button type="submit" className="w-full btn btn-primary">SEARCH</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search