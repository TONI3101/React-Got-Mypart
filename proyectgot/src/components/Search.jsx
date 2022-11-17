import React from 'react'

const Search = ({setSearchPj}) => { // aqui el nombre 2º
    const handleFind = (event) => {
        setSearchPj(event.target.value.toLowerCase()) // nombre de la funcion 3º
    }
  return (
    <div>
        <input onChange={handleFind} type="text" name='name' placeholder='Name...' />
    </div>
  )
}

export default Search