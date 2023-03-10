import { useState } from "react";
import Container from "react-bootstrap/Container"
import "./SearchBar.css"

const SearchBar = ({onSubmit}) => {
    const[searchKeyword, setSearchKeyword]= useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(searchKeyword);
    }

    return ( 
    <Container fluid>
        <form id="searchBar" onSubmit={handleSubmit}>
            <label> Search For Game </label>
            <input type="search"  value={searchKeyword} onChange={(event)=>
                 setSearchKeyword(event.target.value)}
                 />
            <button >SEARCH</button>
        </form>
    </Container>  

     );
}

 
export default SearchBar;