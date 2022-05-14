import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add("display-transition-color");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
