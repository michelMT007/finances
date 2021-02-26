import React from 'react'
import {Link} from 'react-router-dom'

const MenuItem =(props) => {
    return(
        <li>
            <Link to={props.to}> {props.label}</Link>
        </li>
    )
}
 
export default MenuItem