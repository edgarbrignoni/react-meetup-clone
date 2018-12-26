import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import { Link } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import $ from "jquery";
import Navbar from '../components/Navbar.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';

class Sample extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            id: "65",
            title: "title",
            content: "content",
            text: "text",
            select: "Select 3",
            text_area: "text area",
            radio: "Radio 2",
            fracture: true,
            luxation: "",
            sprain: ""
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("event", e);
        console.log("checked", target.checked);
        console.log("value", target.value);
        console.log("name", target.name);
    
        this.setState({
            [name]: value
        });
    }
    
    render(){
        
        const {session, actions} = this.props;
        
        return (
            <React.Fragment>
                <Navbar />
                <p></p>
                <div className="container">
                    <form role="form" onSubmit={(e) => {
                        e.preventDefault();
                        actions.updateSample(
                            this.state.id,
                            this.state.title,
                            this.state.content,
                            this.state.text,
                            this.state.select,
                            this.state.text_area,
                            this.state.radio,
                            this.state.fracture,
                            this.state.luxation,
                            this.state.sprain
                        );
                    }}>
                        <div className="form-group row">
                            <div className="col-sm-2">Checkbox</div>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="fracture"
                                        name="fracture"
                                        value="1"
                                        checked={this.state.fracture}
                                        onChange={this.handleInputChange}
                                        //onChange={(e) => this.setState({fracture: e.target.value})}
                                    />
                                    <label className="form-check-label" htmlFor="fracture">
                                        Fracture
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="luxation"
                                        name="luxation"
                                        value="2"
                                        checked={this.state.luxation}
                                        onChange={this.handleInputChange}
                                        // onChange={(e) => this.setState({luxation: e.target.value})}
                                        // defaultChecked={this.state.luxation}
                                    />
                                    <label className="form-check-label" htmlFor="luxation">
                                        Luxation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="sprain"
                                        name="sprain"
                                        value="3"
                                        checked={this.state.sprain}
                                        onChange={this.handleInputChange}
                                        // onChange={(e) => this.setState({sprain: e.target.value})}
                                        // defaultChecked={this.state.sprain}
                                    />
                                    <label className="form-check-label" htmlFor="sprain">
                                        Sprain
                                    </label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Post title</label>
                            <input 
                                name="title"
                                value={this.state.title}
                                onChange={(e) => this.setState({title: e.target.value})}
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea2">Post content</label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea2" 
                                rows="3"
                                name="content"
                                value={this.state.content}
                                onChange={(e) => this.setState({content: e.target.value})}
                            >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput3">Example text</label>
                            <input 
                                name="text"
                                value={this.state.text}
                                onChange={(e) => this.setState({text: e.target.value})}
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput3" 
                                placeholder="" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Example select</label>
                            <select 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                name="select"
                                value={this.state.select}
                                onChange={(e) => this.setState({select: e.target.value})}
                            >
                                <option value="Select 1">Select 1</option>
                                <option value="Select 2">Select 2</option>
                                <option value="Select 3">Select 3</option>
                            </select>
                        </div>
                        {/*
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        */}
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                name="text_area"
                                value={this.state.text_area}
                                onChange={(e) => this.setState({text_area: e.target.value})}
                            >
                            </textarea>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="radio" 
                                        id="radio1" 
                                        value="Radio 1"
                                        onChange={(e) => this.setState({radio: e.target.value})}
                                        checked={this.state.radio === 'Radio 1'}
                                    />
                                        <label className="form-check-label" htmlFor="radio1">
                                        Radio 1
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="radio" 
                                        id="radio2" 
                                        value="Radio 2"
                                        onChange={(e) => this.setState({radio: e.target.value})}
                                        checked={this.state.radio === 'Radio 2'}
                                    />
                                        <label className="form-check-label" htmlFor="radio2">
                                        Radio 2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="radio" 
                                        id="radio3" 
                                        value="Radio 3"
                                        onChange={(e) => this.setState({radio: e.target.value})}
                                        checked={this.state.radio === 'Radio 3'}
                                    />
                                        <label className="form-check-label" htmlFor="radio3">
                                        Radio 3
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withSession(Sample);

Sample.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object
};