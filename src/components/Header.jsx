// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Container,
    Text,
    Image,
    Collapse,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    PhoneIcon
} from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const NavLink = ({ children, to }) => (
    <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        style={{ cursor: 'pointer' }}
    >
        <Text
            px={2}
            py={1}
            rounded="md"
            fontWeight="500"
            position="relative"
            _hover={{
                textDecoration: 'none',
                color: 'brand.500',
            }}
            _after={{
                content: "''",
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: '0',
                left: '0',
                bg: 'brand.500',
                transition: 'width 0.3s ease',
            }}
            _hover_after={{
                width: '100%',
            }}
            transition="all 0.3s ease"
        >
            {children}
        </Text>
    </ScrollLink>
);

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            bg={scrolled ? 'white' : 'transparent'}
            color={scrolled ? 'secondary.800' : 'white'}
            boxShadow={scrolled ? 'md' : 'none'}
            transition="all 0.3s ease"
            w={'100%'}
        >
            <Container maxW="container.xl">
                <Flex
                    h="80px"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center">
                        <Box
                            bg={scrolled ? 'white' : 'white'}
                            borderRadius={"full"}
                            p={0.5}
                        >
                            <Image
                                src={logo}
                                alt="AYUDAR SAS Logo"
                                height="50px"
                            />
                        </Box>
                        <Text
                            ml={3}
                            fontWeight="bold"
                            fontSize={{ base: 'sm', md: 'md' }}
                            display={{ base: 'none', md: 'block' }}
                        >
                            AYUDAR SAS<br />
                            <Text as="span" fontSize="xs" fontWeight="normal">
                                EQUIPOS Y SERVICIOS MÉDICOS
                            </Text>
                        </Text>
                    </Flex>

                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        <NavLink to="inicio">Inicio</NavLink>
                        <NavLink to="servicios">Servicios</NavLink>
                        <NavLink to="nosotros">Nosotros</NavLink>
                        <NavLink to="testimonios">Testimonios</NavLink>
                        <NavLink to="ubicacion">Ubicación</NavLink>
                        <NavLink to="contacto">Contacto</NavLink>
                    </HStack>

                    <HStack spacing={3}>
                        <Button
                            as="a"
                            href="tel:3116652702"
                            variant="secondary"
                            size="sm"
                            leftIcon={<PhoneIcon />}
                            fontSize="sm"
                            display={{ base: 'none', md: 'flex' }}
                        >
                            311 665 2702
                        </Button>
                        <Button
                            as="a"
                            href="https://wa.me/573116652702"
                            target="_blank"
                            variant="primary"
                            size="sm"
                            leftIcon={<FaWhatsapp />}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            WhatsApp
                        </Button>
                        <IconButton
                            size="md"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Abrir menú"
                            display={{ md: 'none' }}
                            onClick={onToggle}
                            variant={scrolled ? 'ghost' : 'solid'}
                            colorScheme={scrolled ? 'gray' : 'whiteAlpha'}
                        />
                    </HStack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <Box
                        pb={4}
                        bg={scrolled ? 'white' : 'rgba(0, 0, 0, 0.8)'}
                        rounded="md"
                    >
                        <Stack as="nav" spacing={4} px={2}>
                            <NavLink to="inicio">Inicio</NavLink>
                            <NavLink to="servicios">Servicios</NavLink>
                            <NavLink to="nosotros">Nosotros</NavLink>
                            <NavLink to="testimonios">Testimonios</NavLink>
                            <NavLink to="ubicacion">Ubicación</NavLink>
                            <NavLink to="contacto">Contacto</NavLink>
                            <Flex justify="space-between">
                                <Button
                                    as="a"
                                    href="tel:3116652702"
                                    variant="secondary"
                                    size="sm"
                                    leftIcon={<PhoneIcon />}
                                    w="48%"
                                >
                                    Llamar
                                </Button>
                                <Button
                                    as="a"
                                    href="https://wa.me/573116652702"
                                    target="_blank"
                                    variant="primary"
                                    size="sm"
                                    leftIcon={<FaWhatsapp />}
                                    w="48%"
                                >
                                    WhatsApp
                                </Button>
                            </Flex>
                        </Stack>
                    </Box>
                </Collapse>
            </Container>
        </Box>
    );
};

export default Header;