// Import the necessary modules
import { extendTheme } from "@chakra-ui/react";

// Define your custom theme
const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#f0f7ff",
      100: "#c2e0ff",
      200: "#94c7ff",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#1F3344"
      }
    }
  }
});

export default customTheme;
