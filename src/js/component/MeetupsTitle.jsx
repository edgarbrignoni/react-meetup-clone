import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class MeetupsTitle extends React.Component{
    
    render(){
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-6">
                            <a href="https://placeholder.com"><img src="http://via.placeholder.com/600x350"/></a>
                        </div>
                        <div className="col-4">
                            <h4 className="display-4">Meetup 1</h4>
                            <p className="lead">Location.</p>
                            <p className="lead">Miami, FL</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
