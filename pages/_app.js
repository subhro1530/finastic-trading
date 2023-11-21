// _app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the styles
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Disable auto CSS injection

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
