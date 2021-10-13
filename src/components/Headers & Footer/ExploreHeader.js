import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ExploreHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        document.title = "Visit Penrith | Explore"
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
                        "url(" + require("assets/img/discover.jpg").default + ")",
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 class='presentation-title'>Let's go for a wander</h1>
                        <h3>Put your boots on, check your bike tyres, secure your kayak to your car and don't forget your binoculars!</h3>
                        <br />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ExploreHeader;