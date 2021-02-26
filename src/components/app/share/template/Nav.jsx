import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'

const Nav = (props) =>{
    
    return(
        <nav>
            <Menu> 
                <MenuItem to="/" label="Dashboard"/>
                <MenuItem to="/finances" label="Finaces"/>
            </Menu>
        </nav>
    )
}
export default Nav