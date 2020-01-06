import React, { Component } from 'react';

class About extends Component {
    render(){
        return (
            <div className = "about-layout">
                <img src="images/me.jpeg" className="about-image"/>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I'm a software engineering student at the University of Ottawa. 
                        I love art and design and have worked as a graphic designer for both the Engineering Students' Society
                        and the IEEE branch at university. I decided to start doing freelance design to pursue this passion outside 
                        school and learn more about what it's like to work for myself. I'm in the process of learning React as well,
                        so I took the opportunity to develop my React skills by build this website from scratch. 
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
