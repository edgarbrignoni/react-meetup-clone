import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";
import PropTypes from 'prop-types';

export class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-6 mx-auto mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h2>{this.props.date}</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <h3 className="card-title">{this.props.time}</h3>
                                </div>
                                <div className="col-9">
                                    <Link to={"/events/" + this.props.ID}>
                                        <h5 className="card-text">{this.props.name} - {this.props.location}</h5>
                                    </Link>
                                    <p className="card-text">{this.props.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    ID: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string
};