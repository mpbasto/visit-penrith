import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbar & Cards/MainNavbar.js";
import FoodHeader from "components/Headers & Footer/FoodHeader.js";
import Footer from "components/Headers & Footer/Footer";

function Eat() {
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
            <FoodHeader />
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Title</h2>
                                <h5 className="description">
                                    Something great is going here...promise!
                                </h5>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    I'm not working today :/
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Something even greater will be here! Watch this space.</h2>
                        <Row>
                        </Row>
                    </Container>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Eat;