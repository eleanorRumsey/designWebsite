import React, { Component } from 'react';

class Portfolio extends Component {
    render(){
        return (
            <div>
                <img src="images/Uncaged.jpg" className="portfolio-image"/>
                <img src="images/PlayingWithFire.png" className="portfolio-image"/>
                <img src="images/AgileWorkshop.png" className="portfolio-image"/>
            </div>
        );
    }
}

export default Portfolio;