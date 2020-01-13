
import React from 'react';

        const Header = (props) => {
            return (<li className="bloc">
            <a  className={props.data.active ? "bloc-a-green" :"bloc-a-gray" } href={props.data.link}>{props.data.text}</a>

            
            {props.data.submenu && <ul className="option"> {props.data.submenu.map(el=> <li className="sous-menu">{el}</li>)} </ul>}
            
           
            </li>
    
            )
        
        }
        

export default Header;