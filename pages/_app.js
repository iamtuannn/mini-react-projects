import { useEffect } from "react";
import { Provider } from "../components/Context";
import "../styles/globals.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add("display-transition-color");
  }, []);
  return (
    <Provider>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
