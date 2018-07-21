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
            ],
            "events": [
            ],
            "session": {
            },
            "isLoading": true
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token', {
                method: 'post',
                body: JSON.stringify(
                    {
                        "username":receivedUsername,
                        "password":receivedPassword
                    }),
                headers: new Headers(
                    {
                        'Content-Type':'application/json'
                    })
                })
                .then(response => response.json())
                .then(data => this.setState({ session: data}))
                .catch(error => console.log(error));
                // this.setState(
                //     {
                //         session: {
                //             ID: 1000,
                //             user_nicename: receivedUsername,
                //             password: receivedPassword,
                //             token: "gfdrtu6545hftydhgrhxfh"
                //         }
                //     }
                // );
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
            },
            "loadInitialData": () => {
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events')
                  .then(response => response.json())
                  .then(data => this.setState({ events: data, isLoading: false }))
                  .catch(error => console.log(error));
              
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/meetups')
                  .then(response => response.json())
                  .then(data => this.setState({ meetups: data }))
                  .catch(error => console.log(error));
            },
            "logout": () => this.setState({
                session: {
                }
            })
        };
    }
    
    componentDidMount() {
        this.actions.loadInitialData();
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