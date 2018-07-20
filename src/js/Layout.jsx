import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";

import Home from "./views/Home.jsx";
import Event from "./views/Event.jsx";
import Meetup from "./views/Meetup.jsx";

class Layout extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            "meetups": [
                {
                    ID: 1,
                    title: "Adults",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Ipsum nunc aliquet bibendum enim facilisis. Viverra mauris in aliquam sem fringilla ut.",
                    listOfEvetns: [ 1, 2, 3]
                },
                {
                    ID: 2,
                    title: "Movies",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Porttitor eget dolor morbi non arcu risus. Ultrices vitae auctor eu augue ut.",
                    listOfEvetns: [ 4, 5, 6]
                },
                {
                    ID: 3,
                    title: "Teens",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis. Sed turpis tincidunt id aliquet risus. Curabitur vitae nunc sed velit.",
                    listOfEvetns: [ 7, 8, 9]
                }
            ],
            "events": [
                {
                    ID: 1,
                    post_title: "Speed Dating",
                    day: "October 31",
                    time: "10:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "Coconut Groove",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6],
                    meetup: 3
                },
                {
                    ID: 2,
                    post_title: "Billiards",
                    day: "July 5",
                    time: "9:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "Homstead",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6],
                    meetup: 3
                },
                {
                    ID: 3,
                    post_title: "Poker Nights",
                    day: "June 10",
                    time: "10:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "North Miami",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6],
                    meetup: 3
                },
                {
                    ID: 4,
                    post_title: "Cook With Us",
                    day: "August 1",
                    time: "8:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "Hialeah",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6],
                    meetup: 1
                },
                {
                    ID: 5,
                    post_title: "Bowling Afternoon",
                    day: "August 5",
                    time: "1:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "Pembrook Pines",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6],
                    meetup: 1
                },
                {
                    ID: 6,
                    post_title: "Beach Time",
                    day: "February 3",
                    time: "12:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "Brickell",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6],
                    meetup: 3
                },
                {
                    ID: 7,
                    post_title: "Bond Marathon",
                    day: "January 13",
                    time: "9:00 am",
                    description: "Play Bingo with your community evey 10th of the month. Bring your friends and family",
                    location: "Coral Gables",
                    rsvpYes: [ 1, 2, 3],
                    rsvpNo: [ 4, 5, 6],
                    meetup: 2
                },
                {
                    ID: 8,
                    post_title: "Despicable Me",
                    day: "February 15",
                    time: "9:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "South Beach",
                    rsvpYes: [ 1, 2, 3],
                    rsvpNo: [ 4, 5, 6],
                    meetup: 2
                },
                {
                    ID: 9,
                    post_title: "Coco",
                    day: "May 20",
                    time: "5:00 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Dictum sit amet justo donec.",
                    location: "Kendall",
                    rsvpYes: [ 1, 2, 3],
                    rsvpNo: [ 4, 5, 6],
                    meetup: 2
                }
            ],
            "session": {
                ID: 1,
                username: "mompy",
                password: "abc123",
                token: "wjer147892akerfdv"
            },
            "isLoading": true
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                this.setState(
                    {
                        session: {
                            ID: 1000,
                            user_nicename: receivedUsername,
                            password: receivedPassword,
                            token: "gfdrtu6545hftydhgrhxfh"
                        }
                    }
                );
            },
            "rsvpEvent": (id, userId, answer, token) => {
                var indexOfEvent = 0;
                var theArrayWithEvent = this.state.events.filter( (item, index) => {
                    
                    if(item.ID === parseInt(id)){
                        indexOfEvent = index;
                        return true;
                    }
                    
                });
                
                let event = theArrayWithEvent[0];
                
                if (answer === "yes") {
                    event.rsvpYes.push(userId);
                } else {
                    event.rsvpNo.push(userId);
                }
                
                var tempArray = this.state.events;
                tempArray[indexOfEvent] = event;
                
                this.setState({"events": tempArray});
            }
        };
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/event/:theid" component={Event} />
                            <Route exact path="/meetup/:theid" component={Meetup} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Layout;