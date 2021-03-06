import React from 'react';
import { Link } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import $ from "jquery";
import PropTypes from "prop-types";
import logo4Geeks from '../../img/logo4Geeks.png';

class Navbar extends React.Component{
  constructor(){
    super();
    
    this.state = {
      username: "initial_state",
      password: "initial_state",
      modal: false
    };
  }
    
  componentDidUpdate(prevProps, prevState) {
  //     // Previous ThemeContext value is prevProps.theme
  //     // New ThemeContext value is this.props.theme
    if (this.props.session.token) $('#exampleModal').modal('hide');
  }
    
  render(){
    // let homeActive = this.props.currentView === "home" ? "active" :"";
    
    const {session, actions} = this.props;
    
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-between navbar-expand-sm">
          <Link className="navbar-brand" to="/">
            <img id="logoInverted" className="img-fluid" src={logo4Geeks} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {session && typeof(session.user_nicename) !== 'undefined' ?
                <button type="button" className="btn btn-secondary" onClick={(e) => actions.logout()}>Logout</button>
                :
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-toggle="modal" 
                  data-target="#exampleModal"
                >
                  Login
                </button>
              }
            </div>
          </div>
        </nav>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form role="form" onSubmit={
                  (e) => {
                    e.preventDefault();
                    actions.loadSession(this.state.username, this.state.password);
                  }
                }>
                  <div className="form-group">
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                  </div>
                  <input type="submit" value="Login" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSession(Navbar);

Navbar.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
  currentView: PropTypes.string
};