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
import HistoryHeader from "components/Headers & Footer/HistoryHeader.js";
import Footer from "components/Headers & Footer/Footer";

function History() {
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
            <HistoryHeader /><br /><br />
            <div className="main">
                <div class="section text-center">
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">

                            <h2 className="title">Historic market town</h2>
                            <h4 className="description ml-5 mr-5">
                                The history of any town is important. After all, without history there is no heritage, and without heritage there is no past on which to build.
                            </h4>
                            <br />
                            <br />
                            <h5 className="note text-left ml-5">
                                Penrith’s location – at an important intersection of routes between Scotland and England and on the main route across the Pennines – is key to its historical status as a major market town. Even today, its distinctive red sandstone buildings are full of specialist, family-run shops, cosy pubs and atmospheric old pubs, while it’s Tuesday market still does a roaring trade.
                            </h5>
                            <h5 className="note text-left ml-5 mr-2">
                                Ancient sites including a circular earthenwork bounded by a ditch (nicknamed ‘King Arthur’s Round Table’) at Eamont Bridge and the nearby monolith at Mayburgh Henge indicate that this area was inhabited during prehistoric times. Always keen to exploit good transport routes, the Romans built the fort of Voreda about six miles north of Penrith and linked it to another at Brocavum, now Brougham Castle.

                            </h5>
                            <br />
                            <Button
                                className="btn-round mb-2"
                                color="info"
                                href="https://www.explorepenrith.org.uk/cg/panel2/"
                                target="_blank" rel="noreferrer noopener"
                            >
                                Take the Coronation Gardens Tour
                            </Button>

                            <br />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="section section-dark text-center">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="title">Title</h2>
                            <h5 className="description">
                                Something is going here. Brace yourselves!
                            </h5>
                            <br />
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default History;
