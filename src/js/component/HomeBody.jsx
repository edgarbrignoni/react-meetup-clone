import React from 'react';

//include images into your bundle
import {Card} from '../component/Card.jsx';
import {Consumer} from "../stores/AppContext.jsx";

//create your first component
export class HomeBody extends React.Component{
    
    render(){
        return (
            <Consumer>
                {({ state }) => (
                    state.events.map((item, index) => {
                        return (
                            <Card 
                                key={index}
                                ID={item.ID}
                                name={item.name}
                                date={item.date}
                                time={item.time}
                                description={item.description}
                                location={item.location}
                            />
                        );
                    })
                )}
            </Consumer>
        );
    }
}