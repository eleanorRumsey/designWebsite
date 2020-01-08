import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div className="row">
                <h1>Eleanor Rumsey Designs</h1>
                <a href="https://github.com/eleanorRumsey"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/eleanorrumsey/"><i class="fab fa-linkedin"></i></a>
            </div>
        );
    }
}

export default Header;
