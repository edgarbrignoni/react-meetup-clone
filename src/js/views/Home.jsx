import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import Navbar from '../component/Navbar.jsx';
import Card from '../component/Card.jsx';
import Footer from '../component/Footer.jsx';

class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="header text-center pb-3">
                    <br />
                    <h1 className="display-4">The Meetup Clone</h1>
                    <p className="lead">This is a mini project created by <a href="#">4GeeksAcademy</a></p>
                    <p><small>Using: ReactJS, Bootstrap, @Fortawesome, Moment, React-router</small></p>
                </div>
                <Consumer>
                    {({ state }) => (
                        state.events.map((item, index) => {
                            return (
                                <Card 
                                    key={index}
                                    ID={item.ID}
                                    name={item.post_title}
                                    date={item.meta_keys.day}
                                    time={item.meta_keys.time}
                                    description={item.post_content}
                                    // location={item.location}
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

export default Home;