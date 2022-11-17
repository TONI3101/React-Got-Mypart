import React, { useContext} from 'react';
import { MyContext } from '../components/mycontext/MyContext';
import NavBar from '../components/Navbar/Navbar';
import Search from '../components/Search';




const Home = () => {
  const {t} = useContext(MyContext)
  return (
    <div>
      <Search/>
      <NavBar/>
      <img src="" alt="" />
    </div>
    

  )
}

export default Home;