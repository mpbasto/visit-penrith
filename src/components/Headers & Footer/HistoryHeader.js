import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function HistoryHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        document.title = "Visit Penrith | History"
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
                        "url(" + require("assets/img/castle.jpeg").default + ")",
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 class='presentation-title'>Step back in time</h1>
                        <h3>Our town's heritage and the people behind it</h3>
                        <br />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HistoryHeader;