
import {BrowserRouter as Router} from 'react-router-dom'
import Container from './share/template/Container'
import Header from './share/template/Header'
import Toolbar from './share/template/Toolbar'
import SideNav from './share/template/SideNav'
import Footer from './share/template/Footer'
import Routes from './Routes'
import TopNav from './share/template/TopNav'
import Nav from './share/template/Nav'
const  App =  (props)  => {
    return (
        <Container>
            <Header><h1>My Finances</h1></Header>

            <Toolbar><span>Toolbar</span></Toolbar>

            <Router>
                <TopNav> 
                    <Nav></Nav>
                </TopNav>
                <SideNav> 
                    <Nav></Nav> 
                </SideNav>
                    
                <Routes></Routes>

            </Router>
            <Footer><span>2021 MACsys - FInances app.</span></Footer>
        </Container>
    )
}
export default App
