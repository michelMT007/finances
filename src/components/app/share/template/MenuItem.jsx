import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components' 

const MenuContent= styled.div `
    display: flex;
    flex: 1;
`
const MenuItemIcon= styled.div `
    display: flex;
    flex-basis: 30px;
    align-items:center;
    justify-content:center;

` 



const MenuItemLabel = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    
`
const MenuItem =(props) => {
    return(
        <li>
            <Link to={props.to}> {props.label}
                <MenuContent>
                    <MenuItemIcon>
                    <i className={`fa fa-${props.icon}`}></i>
                    </MenuItemIcon>
                    <MenuItemLabel>{props.label}</MenuItemLabel>
                </MenuContent>
            </Link>
        </li>
    )
}
 
export default MenuItem