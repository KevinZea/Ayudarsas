// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Avatar,
    Stack,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const testimonials = [
    {
        id: 1,
        name: 'María González',
        role: 'Cliente',
        content: 'Excelente servicio, el equipo de oxígeno llegó rápidamente a mi casa y me explicaron muy bien cómo usarlo. La atención fue muy amable y profesional.',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        rating: 5,
    },
    {
        id: 2,
        name: 'Carlos Ramírez',
        role: 'Cliente',
        content: 'Contraté el servicio de enfermería a domicilio y quedé muy satisfecho. El personal es muy profesional y brinda una atención cálida y humana.',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        rating: 5,
    },
    {
        id: 3,
        name: 'Laura Mendoza',
        role: 'Cliente',
        content: 'Alquilé una silla de ruedas para mi mamá y el servicio fue impecable. Entrega puntual y el equipo estaba en perfectas condiciones.',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
        rating: 4,
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const bgColor = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box id="testimonios" py={20} bg="gray.50">
            <Container maxW="container.xl">
                <Flex direction="column" align="center" mb={12} data-aos="fade-up">
                    <Text
                        color="brand.500"
                        fontWeight="bold"
                        textTransform="uppercase"
                        mb={2}
                        letterSpacing="wide"
                    >
                        Testimonios
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
                        Lo que dicen nuestros clientes
                    </Heading>
                    <Text
                        color="gray.600"
                        textAlign="center"
                        mt={8}
                        maxW="800px"
                        fontSize="lg"
                    >
                        La satisfacción de nuestros clientes es nuestra principal motivación.
                        Nos esforzamos por brindar un servicio de excelencia en cada atención.
                    </Text>
                </Flex>

                <Box
                    position="relative"
                    height={{ base: '400px', md: '300px' }}
                    maxW="900px"
                    mx="auto"
                    data-aos="zoom-in"
                >
                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            bg={bgColor}
                            p={8}
                            borderRadius="xl"
                            boxShadow="lg"
                            height="100%"
                            position="absolute"
                            width="100%"
                        >
                            <Icon
                                as={FaQuoteLeft}
                                color="brand.100"
                                w={10}
                                h={10}
                                opacity={0.2}
                                position="absolute"
                                top={8}
                                left={8}
                            />

                            <Flex
                                height="100%"
                                direction="column"
                                justify="space-between"
                                zIndex={1}
                                position="relative"
                            >
                                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} mb={8} fontStyle="italic" pt={8}>
                                    {testimonials[current].content}
                                </Text>

                                <Stack direction="row" align="center" spacing={4}>
                                    <Avatar src={testimonials[current].avatar} size="md" />
                                    <Box>
                                        <Text fontWeight="bold">{testimonials[current].name}</Text>
                                        <Text fontSize="sm" color="gray.500">{testimonials[current].role}</Text>
                                    </Box>
                                    <Flex ml="auto">
                                        {[...Array(5)].map((_, i) => (
                                            <Icon
                                                key={i}
                                                as={FaStar}
                                                color={i < testimonials[current].rating ? 'yellow.400' : 'gray.300'}
                                                w={4}
                                                h={4}
                                            />
                                        ))}
                                    </Flex>
                                </Stack>
                            </Flex>
                        </MotionBox>
                    </AnimatePresence>
                </Box>

                <Flex justify="center" mt={8}>
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            h="10px"
                            w="10px"
                            mx="2px"
                            borderRadius="full"
                            bg={current === index ? 'brand.500' : 'gray.300'}
                            cursor="pointer"
                            onClick={() => setCurrent(index)}
                            transition="all 0.3s ease"
                            _hover={{ transform: 'scale(1.2)' }}
                        />
                    ))}
                </Flex>
            </Container>
        </Box>
    );
};

export default Testimonials;