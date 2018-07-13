import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";
import {Events} from "./views/Events.jsx";
import {Meetups} from "./views/Meetups.jsx";

import { Provider } from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    
    constructor(){
        super();
        
        this.state = {
            "meetups": [
                {
                    ID: 1,
                    name: "What's Happening",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Ipsum nunc aliquet bibendum enim facilisis. Viverra mauris in aliquam sem fringilla ut.",
                    listOfEvetns: [ 1, 2, 3]
                },
                {
                    ID: 2,
                    name: "Movie Fans",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Porttitor eget dolor morbi non arcu risus. Ultrices vitae auctor eu augue ut.",
                    listOfEvetns: [ 4, 5, 6]
                },
                {
                    ID: 3,
                    name: "Teens",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis. Sed turpis tincidunt id aliquet risus. Curabitur vitae nunc sed velit.",
                    listOfEvetns: [ 7, 8, 9]
                }
            ],
            "events": [
                {
                    ID: 1,
                    name: "Soccer Matchup",
                    dateTime: "July 15 11:00am",
                    description: "eventDesc",
                    location: "eveLoc",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6]
                },
                {
                    ID: 2,
                    name: "Table Dates",
                    dateTime: "July 21 9:00pm",
                    description: "eventDesc",
                    location: "eveLoc",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6]
                },
                {
                    ID: 3,
                    name: "Poker Nights",
                    dateTime: "July 20 7:00pm",
                    description: "eventDesc",
                    location: "eveLoc",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6]
                },
                {
                    ID: 4,
                    name: "Cook With...",
                    dateTime: "August 1 8:00pm",
                    description: "eventDesc",
                    location: "eveLoc",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6]
                },
                {
                    ID: 5,
                    name: "Bingo",
                    dateTime: "August 5 1:00pm",
                    description: "eventDesc",
                    location: "eveLoc",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6]
                },
                {
                    ID: 6,
                    name: "Soccer Matchup",
                    dateTime: "August 18 11:00am",
                    description: "eventDesc",
                    location: "eveLoc",
                    rsvpYes: [8,9,4],
                    rsvpNo: [4,1,6]
                },
                {
                    ID: 7,
                    name: "Bingo",
                    dateTime: "January 10 9:00 AM",
                    description: "Play Bingo with your community evey 10th of the month. Bring your friends and family",
                    location: "Coral Gables, Miami FL",
                    rsvpYes: [ 1, 2, 3],
                    rsvpNo: [ 4, 5, 6]
                },
                {
                    ID: 8,
                    name: "Movie Night",
                    dateTime: "February 15 9:00 PM",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean et tortor at risus. At elementum eu facilisis sed.",
                    location: "South Beach, Miami FL",
                    rsvpYes: [ 1, 2, 3],
                    rsvpNo: [ 4, 5, 6]
                },
                {
                    ID: 9,
                    name: "Ice Skating",
                    dateTime: "March 20 5:00 PM",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Dictum sit amet justo donec.",
                    location: "Kendall FL",
                    rsvpYes: [ 1, 2, 3],
                    rsvpNo: [ 4, 5, 6]
                }
            ],
            "session": {
                ID: 1,
                userName: "mompy",
                password: "abc123",
                token: "wjer147892akerfdv"
            },
            "isLoading": true
        };
        
        this.actions = {
            
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
                        <Route exact path="/events" component={Events} />
                        <Route exact path="/meetups" component={Meetups} />
                    </Provider>
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}