import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

export class Card extends React.Component{
    
    render(){
        return (
            <div key={item.ID} className="row">
                <div className="col-md-6 mx-auto mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h2>{item.date}</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <h3 className="card-title">{item.time}</h3>
                                </div>
                                <div className="col-9">
                                    <Link to={"/events/" + item.ID}>
                                        <h5 className="card-text">{item.name} - {item.location}</h5>
                                    </Link>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}