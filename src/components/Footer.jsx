// src/components/Footer.jsx
import React from 'react';
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Heading,
    Link,
    Icon,
    Image,
    Button,
    HStack,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight="bold" fontSize="lg" mb={4} color="white">
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <Box bg="brand.800" color="white">
            <Container as={Stack} maxW="container.xl" py={10}>
                <SimpleGrid
                    templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr' }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Flex alignItems="center">
                            <Image src="/logo.svg" alt="Logo" h="50px" />
                            <Box ml={3}>
                                <Heading as="h3" size="md">
                                    AYUDAR SAS
                                </Heading>
                                <Text fontSize="sm" fontWeight="light">
                                    EQUIPOS Y SERVICIOS MÉDICOS
                                </Text>
                            </Box>
                        </Flex>
                        <Text fontSize="sm">
                            Brindamos soluciones médicas profesionales a domicilio para garantizar su bienestar y comodidad. Contamos con equipos de alta calidad y personal especializado.
                        </Text>
                        <HStack spacing={4}>
                            <Button
                                as="a"
                                href="https://facebook.com"
                                target="_blank"
                                size="sm"
                                rounded="full"
                                colorScheme="facebook"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </Button>
                            <Button
                                as="a"
                                href="https://instagram.com"
                                target="_blank"
                                size="sm"
                                rounded="full"
                                colorScheme="pink"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </Button>
                            <Button
                                as="a"
                                href="https://wa.me/573116652702"
                                target="_blank"
                                size="sm"
                                rounded="full"
                                colorScheme="whatsapp"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </Button>
                        </HStack>
                    </Stack>

                    <Stack align="flex-start">
                        <ListHeader>Sitio</ListHeader>
                        <Link
                            as={ScrollLink}
                            to="inicio"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                            _hover={{ color: 'brand.300' }}
                        >
                            Inicio
                        </Link>
                        <Link
                            as={ScrollLink}
                            to="servicios"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                            _hover={{ color: 'brand.300' }}
                        >
                            Servicios
                        </Link>
                        <Link
                            as={ScrollLink}
                            to="nosotros"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                            _hover={{ color: 'brand.300' }}
                        >
                            Nosotros
                        </Link>
                        <Link
                            as={ScrollLink}
                            to="testimonios"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                            _hover={{ color: 'brand.300' }}
                        >
                            Testimonios
                        </Link>
                        <Link
                            as={ScrollLink}
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                            _hover={{ color: 'brand.300' }}
                        >
                            Contacto
                        </Link>
                    </Stack>

                    <Stack align="flex-start">
                        <ListHeader>Servicios</ListHeader>
                        <Link href="#servicios" _hover={{ color: 'brand.300' }}>
                            Alquiler de Equipos
                        </Link>
                        <Link href="#servicios" _hover={{ color: 'brand.300' }}>
                            Terapia Respiratoria
                        </Link>
                        <Link href="#servicios" _hover={{ color: 'brand.300' }}>
                            Atención Domiciliaria
                        </Link>
                        <Link href="#servicios" _hover={{ color: 'brand.300' }}>
                            Enfermería Especializada
                        </Link>
                        <Link href="#servicios" _hover={{ color: 'brand.300' }}>
                            Venta de Insumos
                        </Link>
                    </Stack>

                    <Stack align="flex-start">
                        <ListHeader>Contacto</ListHeader>
                        <Flex align="center">
                            <Icon as={FaMapMarkerAlt} mr={2} />
                            <Text>
                                Calle 12 #34-56, Bogotá, Colombia
                            </Text>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FaPhoneAlt} mr={2} />
                            <Link href="tel:+573116652702" _hover={{ color: 'brand.300' }}>
                                +57 311 665 2702
                            </Link>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FaEnvelope} mr={2} />
                            <Link href="mailto:contacto@ayudarsas.com" _hover={{ color: 'brand.300' }}>
                                contacto@ayudarsas.com
                            </Link>
                        </Flex>
                    </Stack>
                </SimpleGrid>

                <Box pt={10}>
                    <Text fontSize="sm" textAlign="center">
                        © {new Date().getFullYear()} AYUDAR SAS. Todos los derechos reservados.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;