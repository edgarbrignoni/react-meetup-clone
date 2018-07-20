import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class EventsTitle extends React.Component{
    
    render(){
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-6">
                            <p className="lead">Location.</p>
                            <h4 className="display-4">5th event for Meetup 1</h4>
                            <p className="lead">Meetup 1</p>
                        </div>
                        <div className="col-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
