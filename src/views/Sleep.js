import React from "react";
// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

import Cards from "components/Navbar & Cards/Cards";
// core components
import MainNavbar from "components/Navbar & Cards/MainNavbar";
import SleepHeader from "components/Headers & Footer/SleepHeader";
import Footer from "components/Headers & Footer/Footer";

function Sleep() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <MainNavbar />
            <SleepHeader />
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Penrith has a great range of accommodation to suit all visitors, tastes and pockets</h2>
                                <h5 className="description">
                                    We have so much to offer whatever the season, and our easy access by road and rail makes this the perfect place to stay to enjoy the town, Eden Valley, Pennines and Lake District.

                                    With such a vibrant community atmosphere, Penrith is friendly and passionate about service and local sourcing. There is nowhere better to experience true Cumbrian hospitality.</h5> <br />
                                <h5 className="description">
                                    So, whether you are looking for an historic hotel, a friendly B&B or an outdoor adventure, the choice is yours.
                                </h5>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <Row>
                            <h2 className="title ml-auto mr-auto" >And we mean all visitors</h2>
                            <h4 className="description">
                                As the Lake District is popular amongst dog-owners, Penrith is keen to ensure their four-legged companions are as equally cared for.
                            </h4>
                            <br />
                            <br />
                        </Row>
                    </Container>
                    <div className="App">
                        <Cards />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Sleep;
