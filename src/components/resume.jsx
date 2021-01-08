import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Resume extends Component {
    render(){
        return (
            <div className="layout">
                <div className="text-light">
                    <h1>Eleanor Rumsey</h1>
                    <p>Software engineering student and graphic designer</p>
                </div>
                <Row>
                    <Col>
                        <Card className="card-red">
                            <Card.Header className = "text-purple">Software work experience</Card.Header>
                            <Card.Body className = "card-body-empty">
                                <Card.Title>Technical Business Analyst and Developer</Card.Title>
                                <Card.Subtitle>
                                    <div>Jumping Elephants</div>
                                    <div>May 2020 - Jan 2021</div>
                                </Card.Subtitle>
                                <hr className="border-red"/>
                                <Card.Text>
                                    <ul>
                                        <li>Created automated test scripts using Subject7 
                                            (tool based on Selenium WebDriver)
                                            <ul>
                                                <li>Performed unit and regression testing on multiple web applications</li>
                                                <li>Trained four other employees on the testing process and tool</li>
                                                <li>Oversaw and managed the progress of two employees on the project</li>
                                                <li>Presented testing progress and methods to client</li>
                                            </ul>
                                        </li>
                                        <li>Conducted usability testing session for the UX team</li>
                                        <li>Drafted a business case and project charter for a potential development project</li>
                                    </ul>
                                </Card.Text>
                                <br/>
                                <Card.Title>
                                    <div>Junior Applications Developer Co-op</div>
                                </Card.Title>
                                <Card.Subtitle>
                                    <div>Babcock Canada</div>
                                    <div>Sep – Dec 2019</div>
                                </Card.Subtitle>
                                <hr className="border-red"/>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            Full stack development on internal application for recording information 
                                            about repairs of submarines
                                            <ul>
                                                <li>Programmed in C# .NET with MVC, Razor, and Entity Framework</li>
                                                <li>Designed relational database and queries with SQL Server</li>
                                                <li>Implemented client-side functions with JavaScript and Bootstrap</li>
                                            </ul>
                                        </li>
                                        <li>Agile development using Visual Studio Team Foundation Server</li>
                                    </ul>
                                </Card.Text>
                                <br/>
                                <Card.Title>
                                    <div>Tech Analyst</div>
                                </Card.Title>
                                <Card.Subtitle>
                                    <div>Morgan Stanley</div>
                                    <div>Jan – Apr 2019</div>
                                </Card.Subtitle>
                                <hr className="border-red"/>
                                <Card.Text>
                                    <ul>
                                        <li>
                                        Full stack development on a tax reporting web application using Angular/TypeScript and Java
                                            <ul>
                                                <li>Implemented REST services</li>
                                                <li>Designed database queries using DB2, JDBC, SQL</li>
                                                <li>Reprogrammed existing backend processes to be asynchronous using 
                                                    Completable Futures (Java 8)</li>
                                                <li>Created UI unit tests using Karma and Jasmine using principles of test-driven development</li>
                                            </ul>
                                        </li>
                                        <li>Agile development using Jira and Git</li>
                                        <li>Chosen to demonstrate project at the Tech Expo to peers and executives</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-teal">
                            <Card.Header className="text-purple">Graphic Design Work Experience</Card.Header>
                            <Card.Body className = "card-body-empty">
                                <Card.Title>Commissioner of Graphic Design</Card.Title>
                                <Card.Subtitle>
                                    <div>IEEE uOttawa Branch</div>
                                    <div>Mar 2019 - Mar 2020</div>
                                </Card.Subtitle>
                                <hr className="border-teal"/>
                                <Card.Text>
                                    <li>Designed promotional material (posters, t-shirts, banners, patches) for IEEE uOttawa events</li>
                                </Card.Text>
                                <br/>
                                <Card.Title>Graphic Designer</Card.Title>
                                <Card.Subtitle>
                                    <div>Barbara Pritchard, Professional Pianist</div>
                                    <div>May 2014 - present</div>
                                </Card.Subtitle>
                                <hr className="border-teal"/>
                                <Card.Text>
                                    <li>Designed posters and fliers for concerts and recitals and assisted with website design</li>
                                </Card.Text>
                                <br/>
                                <Card.Title>Manager of Graphic Design</Card.Title>
                                <Card.Subtitle>
                                    <div>uOttawa Engineering Students' Society</div>
                                    <div>Sep 2015 - Mar 2018</div>
                                </Card.Subtitle>
                                <hr className="border-teal"/>
                                <Card.Text>
                                    <li>Created more than 25 designs yearly for various faculty events including 101 Week and 
                                        the Engineering Charity Ball</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-yellow">
                            <Card.Header className="text-purple">Education</Card.Header>
                            <Card.Body className="card-body-empty">
                                <Card.Title>Software Engineering, Entrepreneurship and Management Option</Card.Title>
                                <Card.Subtitle>
                                    <div>University of Ottawa</div>
                                    <div>Apr 2017 - present</div>
                                </Card.Subtitle>
                                <hr className="border-yellow"/>
                                <Card.Text>
                                    <ul>
                                        <li>Software architecture, artificial intelligence, product development, user-centered design, quality assurance, operating systems, data structures 
                                            and algorithms, Android app design, computer architecture and logic circuits</li>
                                        <li>Dean’s Honor List Winter 2017, Fall 2017</li>
                                        <li>J.V. Marsh and S.G.S. Shiva Memorial Scholarship 2017</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-yellow">
                            <Card.Header>Contact Info</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col xs="1"><i class="far fa-envelope"></i></Col>
                                        <Col><Card.Link href="mailto:ellierums@gmail.com">ellierums@gmail.com</Card.Link></Col>
                                    </Row>
                                    <Row>
                                        <Col xs="1"><i class="fab fa-github"></i></Col>
                                        <Col><Card.Link href="https://github.com/eleanorRumsey">github.com/eleanorRumsey</Card.Link></Col>
                                    </Row>
                                    <Row>
                                        <Col xs="1"><i class="fab fa-linkedin"></i></Col>
                                        <Col><Card.Link href="https://www.linkedin.com/in/eleanorrumsey/">linkedin.com/in/eleanorrumsey</Card.Link></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className = "card-lt-purple">
                            <Card.Header>Tools Summary</Card.Header>
                            <Card.Body>
                                <Card.Title>Methods</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Object-oriented design</li>
                                        <li>Agile development</li>
                                        <li>Test-driven development (TDD)</li>
                                        <li>MVC</li>
                                    </ul>
                                </Card.Text>
                                <Card.Title>Technologies</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col md="5">
                                            <li>Java</li>
                                            <li>Python</li>
                                            <li>React</li>
                                            <li>Subject7</li>
                                            <li>Razor</li>
                                            <li>PHP</li>
                                            <li>Entity</li>
                                            <li>JUnit</li>
                                            <li>PyUnit</li>
                                            <li>C</li>
                                            <li>C++</li>
                                            <li>XML</li>
                                        </Col>
                                        <Col md="7.5">
                                            <li>C# .NET</li>
                                            <li>TypeScript</li>
                                            <li>Angular</li>
                                            <li>JavaScript</li>
                                            <li>HTML/CSS</li>
                                            <li>Bootstrap</li>
                                            <li>Firebase</li>
                                            <li>SQL Server</li>
                                            <li>PostgreSQL</li>
                                            <li>Karma/Jasmine</li>
                                            <li>Spring Boot Java</li>
                                            <li>ROS</li>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Resume;