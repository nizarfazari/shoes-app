// theme.js
import { extendTheme } from '@chakra-ui/react';

const ChakraTheme = extendTheme({
    colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary : "#FF7A00",
        secondary : "#CF6605",
        gray: {
            50: "#f7fafc",
            // ...
            900: "#171923",
        },
        // ...
    },
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Roboto, sans-serif',
    },
    // ... define other theme properties
});

export default ChakraTheme;
