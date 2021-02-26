import React from 'react'
import Container from './share/template/Container'
import Header from './share/template/Header'
import Toolbar from './share/template/Toolbar'
import SideNav from './share/template/SideNav'
import Footer from './share/template/Footer'
import Content from './share/template/Content'

const  App =  props => {
    return (
        <Container>
            <Header><h1>My Finances</h1></Header>

            <Toolbar><span>Toolbar</span></Toolbar>
            <SideNav><span>spanSideNav</span></SideNav>
            <Content><span>Content</span></Content>
            <Footer><span>2021 MACsys - FInances app.</span></Footer>
        </Container>
    )
}
export default App
