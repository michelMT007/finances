import React from 'react'
import {Link} from 'react-router-dom'

export default  Nav = (props) =>{
    <nav>
        <ul>
            <li> 
                <Link to="/">Dashboard</Link>   
            </li>
            <li>
                <Link to="/finances">Minhas Finanças</Link>
            </li>
            <li> 
                <Link to="/">Dashboard</Link>
            </li>
        </ul>

    </nav>
}
