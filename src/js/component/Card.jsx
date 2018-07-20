import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h2>{this.props.date}</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4 pr-0">
                                    <h4 className="card-text">{this.props.time}</h4>
                                </div>
                                <div className="col-sm-8">
                                    <Link to={"/event/" + this.props.ID}>
                                        <h4 className="card-text">{this.props.name} - {this.props.location}</h4><br />
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

export default Card;

Card.propTypes = {
    ID: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string
};