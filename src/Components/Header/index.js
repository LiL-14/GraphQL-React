import "./style.scss"
import { AiOutlineAliwangwang, AiOutlineSearch } from "react-icons/ai";

function Header(){
    return(
        
        <div className="containerHeader">
            <div className="search">
                <AiOutlineAliwangwang className="iconRandom"/>
                <AiOutlineSearch/>
                <input type="text"/>
            </div>

            <div className="text">
                <h4>API Rick and Morty</h4>
                <span className="description">API para mostrar nome, genero, especie</span>
            </div>
            
        </div>
        
    )
}

export default Header