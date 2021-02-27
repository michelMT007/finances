
import styled from 'styled-components'

export default styled.aside ` 
    grid-area:topnav;
    background-color: #5f5ff8; 
    @media (min-width: 800px) {
        display:none;
    }  

    ul {
        margin: 0;
        display: flex;
        li{
            flex: 1;
            a {
                display: flex;
                min-height: 50px;
            }
        }
    }
`
