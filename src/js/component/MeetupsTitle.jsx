import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class MeetupsTitle extends React.Component{
    
    render(){
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <a href="https://placeholder.com"><img src="http://via.placeholder.com/600x350"></img></a>
                    <h2 className="display-4">Meetup 1</h2>
                    <p className="lead">Location.</p>
                    <p className="lead">Miami, FL</p>
                </div>
            </div>
        );
    }
}
