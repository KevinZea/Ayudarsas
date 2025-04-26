import { useState, useEffect } from 'react';
import { IconButton, Box, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Definir el color de fondo y el color del icono basado en el tema
    const bgColor = useColorModeValue('blue.500', 'blue.200');
    const iconColor = useColorModeValue('white', 'blue.800');

    // Controlar la visibilidad del botón basado en la posición del scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Limpieza del evento cuando el componente se desmonta
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Función para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Box position="fixed" bottom="6" right="6" zIndex="999">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IconButton
                            aria-label="Volver arriba"
                            icon={<FaArrowUp />}
                            onClick={scrollToTop}
                            size="lg"
                            colorScheme="blue"
                            bg={bgColor}
                            color={iconColor}
                            borderRadius="full"
                            boxShadow="md"
                            _hover={{
                                bg: 'blue.600',
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            _active={{
                                bg: 'blue.700',
                                transform: 'translateY(0)',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default ScrollToTop;