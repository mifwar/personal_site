import "../styles/globals.css";
import { DarkMode } from "../utils/darkMode";

function MyApp({ Component, pageProps }) {
  return (
    <DarkMode>
      <Component {...pageProps} />
    </DarkMode>
  );
}

export default MyApp;
