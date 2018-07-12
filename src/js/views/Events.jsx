import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import {Footer} from '../component/Footer.jsx';
import {EventsBody} from '../component/EventsBody.jsx';
import {EventsTitle} from '../component/EventsTitle.jsx';

//create your first component
export class Events extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <EventsTitle />
                <EventsBody />
                <Footer />
            </React.Fragment>
        );
    }
}