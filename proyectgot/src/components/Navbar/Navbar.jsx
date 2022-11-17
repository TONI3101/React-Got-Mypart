import React, { useContext} from "react";
import { MyContext } from "../mycontext/MyContext";


const NavBar = () => {
    const {t, changeLanguaje} = useContext(MyContext);
    
    return(
        <nav>

            <div>
                <button onClick={() => changeLanguaje('en')}>{t('btn_en')}</button>
                <button onClick={() => changeLanguaje('es')}>{t('btn_es')}</button>
            </div>

        </nav>
    )
};

export default NavBar;