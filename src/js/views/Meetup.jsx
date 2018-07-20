import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import NavBar from '../component/NavBar.jsx';
import Card from '../component/Card.jsx';
import Footer from '../component/Footer.jsx';

class Meetup extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <div className="container-fluid">
                    <div className="header row">
                        <div className="col mt-4 mb-4">
                            <a href="#"><img className="img-fluid" src="http://via.placeholder.com/600x350"/></a>
                        </div>
                        <div className="col mt-4 mb-4">
                            <h4>Meetup ##</h4>
                            <br />
                            <p>Location<br />City, State</p>
                        </div>
                    </div>
                </div>
                <Consumer>
                    {({ state }) => (
                        state.events.map((item, index) => {
                            return (
                                <Card 
                                    key={index}
                                    ID={item.ID}
                                    name={item.post_title}
                                    date={item.day}
                                    time={item.time}
                                    description={item.description}
                                    location={item.location}
                                />
                            );
                        })
                    )}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Meetup;