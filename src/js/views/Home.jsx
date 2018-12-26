import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import Navbar from '../components/Navbar.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
import Moment from "moment";

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
                            //let aTime = item.day+"T"+item.time.replace(/:/g,'');
                            let eventDate = item.meta_keys.event_date_time;
                            //console.log('eventDate', eventDate);
                            let eventDay = Moment(eventDate).format("dddd, MMMM Do YYYY");
                            //console.log('eventDay', eventDay);
                            let eventTime = Moment(eventDate).format("h:mm a");
                            //console.log('eventTime', eventTime);
                            return (
                                <Card 
                                    key={index}
                                    ID={item.ID}
                                    name={item.post_title}
                                    date={eventDay}
                                    time={eventTime}
                                    location={item.meta_keys.location}
                                    description={item.post_content}
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