import React from 'react';

//include images into your bundle
import {Card} from '../component/Card.jsx';

//create your first component
export class MeetupsBody extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Card />
                <Card />
                <Card />
            </React.Fragment>
        );
    }
}
