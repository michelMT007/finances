import React from 'react'
import Content from './share/template/Content'
import {Route, Switch} from 'react-router-dom'
import Finances from './finances/Finances'
import DashBoard from './dashboard/DashBoard'
const Routes= (props)  => {
    return(
        <Content>
            <Switch>
                <Route path="/finances"> 
                    <Finances/>
                </Route>
                <Route path="/"> 
                    <DashBoard/>
                </Route>
            </Switch>
        </Content>
    )
}

export default Routes
