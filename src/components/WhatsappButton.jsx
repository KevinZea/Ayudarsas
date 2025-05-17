import { Button, Box } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '573116652702';
    const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.');

    const handleClick = () => {
        const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

        // Llama al evento de conversión
        const callback = () => {
            window.open(waUrl, '_blank');
        };

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                send_to: 'AW-17089820690/BLZVCNmeoskaEJLwh9U_',
                value: 1.0,
                currency: 'COP',
                event_callback: callback
            });
        } else {
            // Si gtag no está disponible, redirige de todas formas
            callback();
        }
    };

    return (
        <Box position="fixed" right="16px" bottom="16px" zIndex={2}>
            <Button
                colorScheme="whatsapp"
                bg="green.500"
                variant="solid"
                onClick={handleClick}
                leftIcon={<FaWhatsapp size={30} />}
                size="md"
                borderRadius="full"
                p={5}
            />
        </Box>
    );
};

export default WhatsAppButton;
