import styled from 'styled-components'

export default styled.div `
    height: 100vh;
    display:grid;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 60px 1fr 40px;

    grid-template-areas:
      'header toolbar'
      'sidenav content' 
      'sidenav footer' 
      ;

    @media (max-width: 800px){
        grid-template-columns:1fr;
        grid-template-rows: 60px 50px 50px 1fr 40px;
        grid-template-areas:
            'header'
            'sidenav'
            'toolbar' 
            'content'
            'footer';       
    }
`
