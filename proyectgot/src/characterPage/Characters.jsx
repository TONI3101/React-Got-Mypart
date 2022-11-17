import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import Search from "../components/Search";



const Characters = () => {
    const [allCharacters, setAllCharacters] = useState ([]);
    const [searchPj, setSearchPj] = useState([]) // esta forma parte del buscador cambiar nombres 1º
    useEffect(() => {
        const getData = async () => {
        const {data} = await axios.get("https://api.got.show/api/show/characters/");
        setAllCharacters(data);
    
        };
        getData()
  
    },[]);
    const filterCharacter = allCharacters.filter((characters)=> characters.name.toLowerCase().includes(searchPj)) // esto es el filtro 4
  return (

        <div>
            <Search setSearchPj={setSearchPj}></Search>
            <NavBar/>
            {filterCharacter.map((item, index) =>{
                return(
                    <div key={index}>
                         <p>{item?.name}</p>
                        <Link to={`/characters/${item.name}`}><img src={item.image} alt="" /></Link>
                    </div>
                );
            })}
            
        </div>



     )
  
};

export default Characters;