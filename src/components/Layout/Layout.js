import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Shop from '../Shop/Shop';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import {Switch, Route, Redirect} from 'react-router-dom';



class Layout extends Component{

    state = {
        homePage: true,
        aboutPage: false,
        shopPage: false,
        contactPage: false,
    };


    render(){

        return(

            <Fragment>
                <Header/>
                
            
                
                    <Switch>
                    
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route path="/about">
                            <About/>
                        </Route>

                        <Route path="/shop">
                            <Shop/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>

                        <Route path="/order">

                        </Route>

                        <Redirect to="/"/>
                    
                    </Switch>
                
              

                <Footer/>
            </Fragment>

        );

    }


}

export default Layout;