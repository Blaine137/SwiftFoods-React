import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';



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
                <Home/>
                <Footer/>
            </Fragment>

        );

    }


}

export default Layout;