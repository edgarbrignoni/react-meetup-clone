import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import Navbar from '../components/Navbar.jsx';
import PropTypes from "prop-types";
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
import Moment from "moment";

class Meetup extends React.Component{
    
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Consumer>
          {({ state, actions }) => {
            //const user = state.session;
            //console.log(user);
            const meetup = state.meetups.find( meetup => meetup.ID === parseInt(this.props.match.params.theid) );
            console.log(meetup);
            if (!meetup) { 
              return(<p>Loading</p>);
            } else { 
              return(
                <div className="container-fluid">
                  <div className="header row">
                    <div className="col mt-4 mb-4">
                      <a href="#"><img className="img-fluid" src="http://via.placeholder.com/600x350"/></a>
                    </div>
                    <div className="col mt-4 mb-4">
                      <h4>{meetup.post_title}</h4>
                      <br />
                      <p>
                        Location
                        <br />
                        City, State
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </Consumer>
        <Consumer>
          {({ state }) => (
            state.events.map((item, index) => {
              let eventDate = item.meta_keys.event_date_time;
              console.log('eventDate', eventDate);
              let eventDay = Moment(eventDate).format("dddd, MMMM Do YYYY");
              console.log('eventDay', eventDay);
              let eventTime = Moment(eventDate).format("h:mm a");
              console.log('eventTime', eventTime);
              
              return (
                <Card 
                  key={index}
                  ID={item.ID}
                  name={item.post_title}
                  date={eventDay}
                  time={eventTime}
                  description={item.post_content}
                  location={item.meta_keys.location}
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

Meetup.propTypes = {
    match: PropTypes.object
};