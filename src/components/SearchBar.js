import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
       // console.log("Tell some data");
    };

    const handleChange = (event) => {
        //console.log(event.target.value);
        setTerm(event.target.value);

    };

    return (
      <div>
        Confirm Your Search {term}
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange} value= {term}/>
       </form>
       {term.length <3 && 'The Search term should contain atleast 3 characters'}
      </div>
    );
  }
  
  export default SearchBar;
  