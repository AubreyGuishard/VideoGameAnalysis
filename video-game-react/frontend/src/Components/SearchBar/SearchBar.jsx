import { useState } from "react";

const SearchBar = ({onSubmit}) => {
    const[searchKeyword, setSearchKeyword]= useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(searchKeyword);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label> Search For Game </label>
            <input type="search"  value={searchKeyword} onChange={(event)=>
                 setSearchKeyword(event.target.value)}
                 />
            <button >SEARCH</button>
        </form>
     );
}

 
export default SearchBar;