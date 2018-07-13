import React from 'react';

//include images into your bundle
import {Card} from '../component/Card.jsx';

//create your first component
export class HomeBody extends React.Component{
    
    render(){
        return (
            // <React.Fragment>
            <Card />
            // </React.Fragment>
        );
    }
}
