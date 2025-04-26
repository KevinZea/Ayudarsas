// src/components/About.jsx
import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    Image,
    Stack,
    HStack,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle, FaUserMd, FaClock, FaTruck, FaHeartbeat } from 'react-icons/fa';
import hero from '../assets/hero-bg.jpg';

const Feature = ({ title, text, icon }) => {
    return (
        <HStack align="flex-start" spacing={5}>
            <Box
                color="brand.500"
                px={2}
                py={2}
                bg="brand.50"
                borderRadius="full"
            >
                <Icon as={icon} w={5} h={5} />
            </Box>
            <VStack align="start" spacing={1}>
                <Text fontWeight={600} fontSize="md">{title}</Text>
                <Text color="gray.600" fontSize="sm">{text}</Text>
            </VStack>
        </HStack>
    );
};

const About = () => {
    return (
        <Box id="nosotros" py={20}>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box data-aos="fade-right">
                        <Box
                            position="relative"
                            height={{ base: '300px', md: '400px', lg: '500px' }}
                            rounded="2xl"
                            boxShadow="2xl"
                            width="full"
                            overflow="hidden"
                        >
                            <Image
                                alt="Hero Image"
                                fit="cover"
                                align="center"
                                w="100%"
                                h="100%"
                                src={hero}
                            />
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                right="0"
                                bg="brand.500"
                                color="white"
                                p={4}
                                fontWeight="bold"
                                textAlign="center"
                            >
                                +10 años de experiencia
                            </Box>
                        </Box>
                    </Box>

                    <Stack spacing={5} data-aos="fade-left">
                        <Text
                            color="brand.500"
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="sm"
                            letterSpacing="wide"
                        >
                            Sobre Nosotros
                        </Text>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                        >
                            AYUDAR SAS{' '}
                            <Text
                                as="span"
                                color="brand.500"
                            >
                                Equipos y Servicios Médicos
                            </Text>
                        </Heading>
                        <Text
                            color="gray.500"
                            fontSize={{ base: 'md', md: 'lg' }}
                        >
                            En AYUDAR SAS nos dedicamos a proporcionar soluciones médicas de calidad en la comodidad de su hogar. Nuestro compromiso es brindar equipos médicos confiables y servicios profesionales que contribuyan a su bienestar y recuperación.
                        </Text>
                        <Text
                            color="gray.500"
                            fontSize={{ base: 'md', md: 'lg' }}
                        >
                            Contamos con un equipo de profesionales capacitados que se preocupan por entregar un servicio humano y personalizado, adaptado a las necesidades específicas de cada paciente.
                        </Text>

                        <Stack spacing={4} mt={8}>
                            <Feature
                                icon={FaUserMd}
                                title="Personal Capacitado"
                                text="Nuestro equipo está conformado por profesionales con experiencia en el área de la salud."
                            />
                            <Feature
                                icon={FaTruck}
                                title="Entregas a Domicilio"
                                text="Llevamos nuestros equipos y servicios hasta la puerta de su hogar en toda Bogotá."
                            />
                            <Feature
                                icon={FaClock}
                                title="Servicio 24/7"
                                text="Disponibles todos los días para atender emergencias y necesidades urgentes."
                            />
                            <Feature
                                icon={FaHeartbeat}
                                title="Compromiso con su Salud"
                                text="Nuestra prioridad es contribuir a su bienestar y recuperación con equipos y servicios de calidad."
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default About;