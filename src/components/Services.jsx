// src/components/Services.jsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Flex,
} from '@chakra-ui/react';
import ServiceCard from './ServiceCard';
import { FaWheelchair, FaBandAid, FaSyringe, FaUserNurse, FaLungs } from 'react-icons/fa';
import { SiOxygen } from "react-icons/si";

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Alquiler de Cilindros de Oxígeno Portátiles',
            description: 'Ofrecemos el alquiler de balas de oxígeno portátil de 682 litros en Bogotá, incluyendo instalación. Se entrega con cánula nasal y flujómetro para adulto.',
            icon: SiOxygen,
            color: 'cyan.400',
            delay: 0.1,
        },
        {
            id: 2,
            title: 'Alquiler de Concentradores de Oxígeno',
            description: 'Alquiler de concentrador de oxígeno fijo, de tamaño reducido, silencioso y de alto rendimiento. Perfecto para tratamientos respiratorios en casa.',
            icon: FaLungs,
            color: 'blue.400',
            delay: 0.2,
        },
        {
            id: 3,
            title: 'Alquiler de Silla de Ruedas Estándar',
            description: 'Ponemos a disposición sillas de ruedas estándar en modalidad de alquiler, ideales para personas en recuperación o que necesiten apoyo temporal para su movilidad.',
            icon: FaWheelchair,
            color: 'purple.400',
            delay: 0.3,
        },
        {
            id: 4,
            title: 'Servicio de Curación a Domicilio',
            description: 'Realizamos atenciones de curación en casa para tratar distintos tipos de heridas, como quirúrgicas, quemaduras, úlceras o pie diabético.',
            icon: FaBandAid,
            color: 'red.400',
            delay: 0.4,
        },
        {
            id: 5,
            title: 'Servicio de Inyectología a Domicilio',
            description: 'Aplicamos medicamentos mediante inyecciones en el hogar, ya sean intramusculares, subcutáneas o intravenosas.',
            icon: FaSyringe,
            color: 'green.400',
            delay: 0.5,
        },
        {
            id: 6,
            title: 'Auxiliar de Enfermería o Cuidador',
            description: 'Contamos con personal capacitado que brinda acompañamiento y cuidados personalizados en casa. Atención profesional y humana.',
            icon: FaUserNurse,
            color: 'orange.400',
            delay: 0.6,
        },
    ];

    return (
        <Box
            id="servicios"
            py={20}
            bg="gray.50"
        >
            <Container maxW="container.xl">
                <Flex
                    direction="column"
                    align="center"
                    mb={16}
                    data-aos="fade-up"
                >
                    <Text
                        color="brand.500"
                        fontWeight="bold"
                        textTransform="uppercase"
                        mb={2}
                        letterSpacing="wide"
                    >
                        Lo que ofrecemos
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
                        Nuestros Servicios
                    </Heading>
                    <Text
                        color="gray.600"
                        textAlign="center"
                        mt={8}
                        maxW="800px"
                        fontSize="lg"
                    >
                        Brindamos soluciones médicas profesionales a domicilio para garantizar su bienestar y comodidad.
                        Contamos con equipos de alta calidad y personal especializado para atenderlo en su hogar.
                    </Text>
                </Flex>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Services;