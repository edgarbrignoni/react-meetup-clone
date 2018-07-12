import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import {Footer} from '../component/Footer.jsx';
import {MeetupsBody} from '../component/MeetupsBody.jsx';
import {MeetupsTitle} from '../component/MeetupsTitle.jsx';

//create your first component
export class Meetups extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <MeetupsTitle />
                <MeetupsBody />
                <Footer />
            </React.Fragment>
        );
    }
}