// src/theme/index.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3', // Azul principal
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
    },
    secondary: {
        50: '#f5f5f5',
        100: '#eeeeee',
        200: '#e0e0e0',
        300: '#bdbdbd',
        400: '#9e9e9e',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#212121',
        900: '#121212',
    },
};

const fonts = {
    heading: '"Montserrat", sans-serif',
    body: '"Nunito", sans-serif',
};

const components = {
    Button: {
        baseStyle: {
            fontWeight: 'bold',
            borderRadius: 'md',
        },
        variants: {
            primary: {
                bg: 'brand.500',
                color: 'white',
                _hover: {
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                },
                transition: 'all 0.3s ease',
            },
            secondary: {
                bg: 'white',
                color: 'brand.500',
                border: '2px solid',
                borderColor: 'brand.500',
                _hover: {
                    bg: 'brand.50',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                },
                transition: 'all 0.3s ease',
            },
        },
    },
    Heading: {
        baseStyle: {
            fontWeight: '700',
            lineHeight: '1.2',
            color: 'secondary.800',
        },
    },
};

const theme = extendTheme({
    colors,
    fonts,
    components,
    styles: {
        global: {
            body: {
                color: 'secondary.700',
                bg: 'white',
            },
        },
    },
});

export default theme;