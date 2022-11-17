import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../components/mycontext/MyContext';
import NavBar from '../components/Navbar/Navbar';

const CharacterDetails = () => {
  const {t} = useContext(MyContext);
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(id);
    const [characterById, setCharacterById] = useState({})
    const [houseLogo, setHouseLogo] = useState([])

    useEffect(() => {
      const gethouse = async (house) =>{
        const {data} = await axios.get("https://api.got.show/api/show/houses/"+ house)
        setHouseLogo(data)
        // console.log(data);
        // console.log(house);
      };
      const getCharacter = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/characters/${id}`)
            setCharacterById(data);
            // console.log(data);
            await gethouse(data.house)
      };

    getCharacter();
    },[]);
  return (
    
    
    <div>
      <button onClick={() => navigate("/characters")}>Volver</button>
      <div>
        <NavBar/>
      </div>

      <h1>{characterById.name}</h1>
      <img src={characterById.image} alt={characterById.name} />
      
      
      <div>
        <h3>{t('casa')}</h3>
        {/* poner el link de la direccion de hauses de sergio aqui con la imagen  */}
        {/* <img src={house.logoURL} alt="" /> */}
        {houseLogo && houseLogo.map((logo, index) => {
          return(
            <div key={index}>
              <img src= {logo.logoURL} alt="" />
            </div>
          )
        }) }
          <p>{characterById.house}</p>
        
        <h3>{t('alianza')}</h3>
          {characterById.allegiances && characterById.allegiances.map((hause, index) => {
              return(
                <div key={index}>
                  <p>{hause}</p>
                </div>
            )
          })}
        
        <h3>{t('apariciones')}</h3>
          {characterById.appearances && characterById.appearances.map((appa, index) => {
            return (
              <div key={index}>
                <p>{appa}</p>
              </div>
            )
          })}
        
      </div>

      <div>
        <h3>PADRE</h3>
          <p>{characterById.father}</p>
        
        <h3>RELACIONES</h3>
          {characterById.related && characterById.related.map((rela, index) =>{
            return(
              <div key={index}>
                <p>{rela.name}</p>
              </div>
            )
          })}
        
        <h3>TITULOS</h3> 
          {characterById.titles && characterById.titles.map((tit, index) => {
            return(
              <div key={index}>
                <p>{tit}</p>
              </div>
            )
          })} 
        
      </div>
    </div>
  )
}

export default CharacterDetails;