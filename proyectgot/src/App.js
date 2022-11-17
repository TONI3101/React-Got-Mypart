import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import './App.css';
import Characters from "./characterPage/Characters";
import Home from "./homePage/Home";
import CharacterDetails from "./characterDetails/CharacterDetails";
import NavBar from "./components/Navbar/Navbar";
import { MyContext } from "./components/mycontext/MyContext";
import { useTranslation } from "react-i18next";





function App() {
  const {t, i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code)
  }

  return (
    <MyContext.Provider value={{t, changeLanguaje}}>
      <Router>
        <div >
          <div>
            <Link to="/">HOME</Link>
            <Link to="/characters"> CHARACTERS </Link>
          </div>

          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/characters" element={<Characters/>}></Route>
            <Route exact path="/characters/:id" element={<CharacterDetails/>}></Route>
          </Routes>
        </div>
      </Router>
    </MyContext.Provider>    
  );
}

export default App;
