import React from "react";


// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbar & Cards/MainNavbar.js";
import PageHeader from "components/Headers & Footer/PageHeader.js";
import Footer from "components/Headers & Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.title = "Visit Penrith | Home";
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <MainNavbar />
            <PageHeader />
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Welcome home!</h2>
                                <h5 className="note">
                                    Penrith was once the capital of Cumbria. It is now an important shopping centre, with a good mix of traditional
                                    shops and sophisticated arcades. Leading off Penrith’s main streets are many old yard entrances with interesting
                                    inscriptions on the lintels.</h5>
                                <h5 className="note">
                                    A large town acting as a regional centre for the eastern Lake District, Penrith lies just outside the National
                                    Park. Just 6 miles to the south-west is lake Ullswater, the Lake District’s second largest
                                    lake and offers a variety of watersports and other outdoor activities.
                                </h5>
                                <br />
                                <Link to={"/explore"} onClick={() => window.scrollTo(0, 0)}>
                                    <Button
                                        className="btn-round"
                                        size='lg'
                                        color="info">
                                        Explore
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                        <br />
                        <br />
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Let's talk about us</h2>
                        <Row>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="https://wanderersandwarriors.com/" target="_blank" rel="noreferrer noopener">
                                            <img
                                                alt="..."
                                                src={
                                                    require("../assets/img/faces/WW-blog.jpeg")
                                                        .default
                                                }
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="https://wanderersandwarriors.com/things-to-do-in-penrith/" target="_blank" rel="noreferrer noopener">
                                            <div className="author">
                                                <CardTitle tag="h4">7 BEST THINGS TO DO IN PENRITH – A COMPLETE GUIDE</CardTitle>
                                                <h6 className="card-category">Wanderers & Warriors</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Charlie & Lauren are a British travel bloggers that combine their sense of humour, love of travel and passion for life to explore the world. Be inspired by their guide of the best things to do in Penrith and surrounding areas!
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="https://cumbriafoodie.com/" target="_blank" rel="noreferrer noopener">
                                            <img
                                                alt="..."
                                                src={
                                                    require("assets/img/faces/georgedragon.jpg").default
                                                }
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="https://cumbriafoodie.com/2013/04/11/the-george-and-dragon-with-the-lowthers-penrith/" target="_blank" rel="noreferrer noopener">
                                            <div className="author">
                                                <CardTitle tag="h4">The George and Dragon with The Lowthers, Penrith</CardTitle>
                                                <h6 className="card-category">Cumbria Foodie</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Cumbria Foodie is a food fanatic, blogging geek, amateur home cook, wild food scavenger and hobby photographer, who wrote a marvelous article about the George and Dragon inn. Find out more about this little "tucked away diamond" on the verges of the Lake District.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="https://www.visitlakedistrict.com/" target="_blank" rel="noreferrer noopener">
                                            <img
                                                alt="..."
                                                src={
                                                    require("assets/img/faces/halloween.jpg")
                                                        .default
                                                }
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="https://www.visitlakedistrict.com/blog/read/2021/10/have-a-spook-tacular-time-in-cumbria-this-halloween-b121" target="_blank" rel="noreferrer noopener">
                                            <div className="author">
                                                <CardTitle tag="h4">Have a spook-tacular time in Cumbria this Halloween</CardTitle>
                                                <h6 className="card-category">Visit Lake District, Cumbria - Blog</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            The official tourism website for the region has a blog with tons of good stuff! Cumbria is a favourite, not only for visitors, but for ghosts and ghouls. It is obviously their favourite playground because of our wealth of ancient castles, stately homes, and spooky forests. Check out all the terrifying events happening this year!
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;

