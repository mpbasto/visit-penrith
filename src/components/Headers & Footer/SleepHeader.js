import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function SleepHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        document.title = "Visit Penrith | Sleep"
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/sleep.jpg").default + ")",
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 class='presentation-title'>We would like you to stay</h1>
                        <h3>From spa resorts to countryside inns to campsites, we know a thing or two about how to take care of visitors</h3>
                        <br />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SleepHeader;