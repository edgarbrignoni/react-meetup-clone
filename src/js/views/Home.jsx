import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import {Footer} from '../component/Footer.jsx';
import {HomeBody} from '../component/HomeBody.jsx';
import {HomeTitle} from '../component/HomeTitle.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <HomeTitle />
                <HomeBody />
                <Footer />
            </React.Fragment>
        );
    }
}