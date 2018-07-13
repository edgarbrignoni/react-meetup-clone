import React from 'react';
import { Link } from "react-router-dom";

//create your first component
export class Footer extends React.Component{
    
    render(){
        return (
            <div className="footer">
                <div className="container pb-2">
                    <p className="text-center"><img src="http://via.placeholder.com/200x50" /></p>
                </div>
            </div>
        );
    }
}
