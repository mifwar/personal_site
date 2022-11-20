import "../styles/globals.css";
import { DarkMode } from "../utils/darkMode";
import { MobileMode } from "../utils/mobileMode";

function MyApp({ Component, pageProps }) {
  return (
    <DarkMode>
      <MobileMode>
        <Component {...pageProps} />
      </MobileMode>
    </DarkMode>
  );
}

export default MyApp;
