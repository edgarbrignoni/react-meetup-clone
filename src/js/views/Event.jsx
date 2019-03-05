import React from "react";
import { Consumer } from '../stores/AppContext.jsx';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTw from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFa from '@fortawesome/fontawesome-free-brands/faFacebook';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';

//Components
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';

//Functional Packages
// import ReactGA from 'react-ga';
import Moment from "moment";

class Event extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: false  
    };
  }
  
  render() {
    return(
      <div>
        <Navbar />
        <Consumer>
          {({ state, actions }) => {
            //const user = state.session;
            // console.log(user);
            const event = state.events.find( event => event.ID === parseInt(this.props.match.params.theid) );
            if (!event) { 
              return(<p>Loading</p>);
            } else { 
              let eventDate = event.meta_keys.event_date_time;
              let eventDay = Moment(eventDate).format("dddd, MMMM Do YYYY");
              let eventTime = Moment(eventDate).format("h:mm a");
              return (
                <div>
                  <div className="jumbotron-fluid mb-3">
                    <div className="container-fluid">
                      <div className="row">
                        {/*left side */}
                        <div className="col-md-9 mb-3">
                          <div className="row">
                            <div className="col-12">
                              <p className="eventDate">{eventDay}</p>
                              <h1 className="eventTitle">{event.post_title}</h1>
                              {console.log(event.post_title)}
                              <h4> 
                                <Link 
                                  to={"/meetup/"+event.meta_keys.meetup_id} 
                                > 
                                  {
                                    state.meetups.length > 0 ?
                                      state.meetups.find( (meetup) => meetup.ID === parseInt(event.meta_keys.meetup_id) ).post_title
                                    :
                                      "Loading..."
                                  } 
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                        {/*right side */}
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 order-lg-2">
                        <div className="card smallCard">
                          <div className="card-body">
                            <div className="row cardInfo">
                              <div className="col-2 socialIcons">
                                <FontAwesomeIcon icon={faClock}/>
                              </div>
                              <div className="col-8">
                                <span className="card-date">{eventDay/*.format("dddd, MMMM DD, YYYY").toString()*/}</span><br/>
                                <span className="card-time">{eventTime/*.format("h:mm a").toString()*/}</span><br/>
                                <span className="card-schedule">Every first and last Tuesday of the month</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*body left side*/}
                      <div className="col-lg-9 order-lg-1 mx-auto">
                        <div className="row">
                          <div className="col-12 mb-4">
                            <img className="img-fluid" src="http://via.placeholder.com/800X500" alt="event image of..." />
                            <h5 className="details"><strong>Details</strong></h5>
                            <p className="bodyText">Snuggle up with cute kitties, hot lattes, and a book. We host this event twice a month for a place to socialize or maybe come out for alternative therapy.<br/><br/>There are a few rules to follow for this event:</p>
                            <ul>
                              <li>You must purchase a beverage (e.g. coffee, tea, cocoa, etc)</li>
                              <li>Stay as long as you like but only 30 minutes with each cat</li>
                              <li>Be kind to cats and humans alike</li>
                              <li>No children under 12 years old. This event is an escape for most people who attend</li>
                              <li>Must wear headphones for phone calls and music</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* the footer */}
                  <Footer />
                </div>
              );
            }
          }}
        </Consumer>
      </div>
    );
  }
}

export default Event;

Event.propTypes = {
    match: PropTypes.object
};