import React, { useState, useEffect } from "react";

const ScrollToTopPreventer = () => {
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setPrevScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (prevScrollY > 0) {
        window.scrollTo(0, prevScrollY);
        }
    }, []);

    return <div />;
};

export default ScrollToTopPreventer;
