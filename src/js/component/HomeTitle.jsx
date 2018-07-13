import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class HomeTitle extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <div className="header text-center">
                    <br />
                    <h2>The Meetup Clone</h2>
                    <h5>This is a mini project created by <a href="http://www.4geeksacademy.com">4GeeksAcademy</a></h5>
                    <p>Using: ReactJS, Bootstrap, @Fortawesome, Moment, React-router</p>
                    <br />
                </div>
                <br />
            </React.Fragment>
        );
    }
}
