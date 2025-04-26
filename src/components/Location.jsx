// src/components/Location.jsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Icon,
    SimpleGrid,
    Stack,
    Button,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

const ContactInfo = ({ icon, title, children }) => {
    return (
        <Stack direction="row" spacing={4} align="flex-start">
            <Flex
                w={10}
                h={10}
                align="center"
                justify="center"
                rounded="full"
                bg="brand.500"
            >
                <Icon color="white" w={5} h={5} as={icon} />
            </Flex>
            <Box>
                <Text fontWeight="bold" fontSize="lg" mb={1}>
                    {title}
                </Text>
                <Text color="gray.600">{children}</Text>
            </Box>
        </Stack>
    );
};

const Location = () => {
    return (
        <Box id="ubicacion" py={20}>
            <Container maxW="container.xl">
                <Flex direction="column" align="center" mb={12} data-aos="fade-up">
                    <Text
                        color="brand.500"
                        fontWeight="bold"
                        textTransform="uppercase"
                        mb={2}
                        letterSpacing="wide"
                    >
                        Encuéntranos
                    </Text>
                    <Heading
                        as="h2"
                        mb={4}
                        textAlign="center"
                        size="xl"
                        position="relative"
                        _after={{
                            content: '""',
                            width: '70px',
                            height: '4px',
                            bg: 'brand.500',
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '2px',
                        }}
                    >
                        Nuestra Ubicación
                    </Heading>
                    <Text
                        color="gray.600"
                        textAlign="center"
                        mt={8}
                        maxW="800px"
                        fontSize="lg"
                    >
                        Estamos ubicados en un punto estratégico de Bogotá para brindarte una atención rápida y eficiente.
                        Visítanos o contáctanos para más información sobre nuestros servicios.
                    </Text>
                </Flex>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box data-aos="fade-right" borderRadius="lg" overflow="hidden" boxShadow="lg">
                        <Box
                            as="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6937276548396!2d-74.1191942857076!3d4.639970896631256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e0b9d3b1daf%3A0x96f7695c324ed2b8!2sTv.%2077%20%2347-17%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2s!4v1651013815822!5m2!1ses!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></Box>
                    </Box>

                    <Stack spacing={8} data-aos="fade-left">
                        <ContactInfo icon={FaMapMarkerAlt} title="Dirección">
                            Transversal 77 #47-17, Bogotá, Colombia
                        </ContactInfo>

                        <ContactInfo icon={FaPhone} title="Teléfono">
                            <Text as="a" href="tel:3116652702" color="brand.500" fontWeight="medium">
                                311 665 2702
                            </Text>
                        </ContactInfo>

                        <ContactInfo icon={FaEnvelope} title="Correo Electrónico">
                            <Text as="a" href="mailto:ayudarequipos@gmail.com" color="brand.500" fontWeight="medium">
                                ayudarequipos@gmail.com
                            </Text>
                        </ContactInfo>

                        <ContactInfo icon={FaClock} title="Horario de Atención">
                            Lunes a Sábado: 8:00 AM - 6:00 PM<br />
                            Domingos y Festivos: Servicio de emergencia 24/7
                        </ContactInfo>

                        <Button
                            leftIcon={<FaExternalLinkAlt />}
                            colorScheme="brand"
                            variant="solid"
                            size="lg"
                            mt={4}
                            as="a"
                            href="https://www.google.com/maps/dir//Tv.+77+%2347-17,+Bogot%C3%A1,+Colombia/@4.6399761,-74.1170056,17z/"
                            target="_blank"
                        >
                            Cómo Llegar
                        </Button>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Location;