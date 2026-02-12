import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children }) {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setAnimate(false);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return <div className={animate ? "page-animate" : ""}>{children}</div>;
}
