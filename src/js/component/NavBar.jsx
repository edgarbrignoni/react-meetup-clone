import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to={"/"} className="nav-item nav-link" >
                <img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png" />
            </Link>
            <form className="form-inline">
<<<<<<< HEAD
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
=======
                <button className="btn btn-primary my-2 my-sm-0 " type="submit">Login</button>
>>>>>>> 30ef9551b466c5c847a376b7200d52b50d4e0958
            </form>
        </nav>
    );
}

export default NavBar;