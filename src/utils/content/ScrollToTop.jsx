import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const [scrollPositions, setScrollPositions] = useState({});
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const saveScrollPosition = () => {
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [pathname]: window.pageYOffset,
      }));
    };

    const restoreScrollPosition = () => {
      const scrollPosition = scrollPositions[pathname];
      if (scrollPosition !== undefined) {
        window.scrollTo(0, scrollPosition);
      } else {
        window.scrollTo(0, 0);
      }
    };

    const handlePopState = () => {
      restoreScrollPosition();
    };

    window.addEventListener("scroll", saveScrollPosition);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, scrollPositions]);

  return null;
};

export default ScrollToTop;
