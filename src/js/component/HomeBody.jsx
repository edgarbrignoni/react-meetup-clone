import React from 'react';

//include images into your bundle
import {Card} from '../component/Card.jsx';
import {Consumer} from "../stores/AppContext.jsx";

//create your first component
export class HomeBody extends React.Component{
    
    render(){
        return (
            <Consumer>
                {({ state }) => (state.events.map((item, index) => {
                    <Card />;
                }))}
            </Consumer>
        );
    }
}
