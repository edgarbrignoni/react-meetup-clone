import React from 'react';

//create your first component
export class Card extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h2>April 28</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <h5 className="card-title">7:00 am</h5>
                                    </div>
                                    <div className="col-9">
                                        <p className="card-text">5th Event for Meetup1</p>
                                        <p className="card-text">Meetup 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </React.Fragment>
        );
    }
}