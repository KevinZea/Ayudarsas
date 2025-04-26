// src/components/ServiceCard.jsx
import React from 'react';
import {
    Box,
    Heading,
    Text,
    Icon,
    Button,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ServiceCard = ({ service }) => {
    const { title, description, icon, color, delay } = service;

    return (
        <MotionBox
            data-aos="fade-up"
            data-aos-delay={delay * 1000}
            className="service-card"
            bg={useColorModeValue('white', 'gray.800')}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            p={6}
            transition="all 0.3s ease"
            _hover={{
                boxShadow: 'xl',
                transform: 'translateY(-5px)',
            }}
            position="relative"
        >
            <Box
                position="absolute"
                top={0}
                right={0}
                width="100px"
                height="100px"
                borderRadius="0 0 0 100%"
                bg={`${color}10`}
                zIndex={0}
            />

            <VStack spacing={4} align="flex-start" zIndex={1} position="relative">
                <Box
                    p={3}
                    borderRadius="full"
                    bg={`${color}20`}
                    color={color}
                >
                    <Icon as={icon} w={6} h={6} />
                </Box>

                <Heading as="h3" size="md" fontWeight="700">
                    {title}
                </Heading>

                <Text color="gray.600" fontSize="md">
                    {description}
                </Text>

                <Button
                    mt={2}
                    size="sm"
                    variant="outline"
                    // src/components/ServiceCard.jsx (continuación)
                    colorScheme="brand"
                    rightIcon={<FaWhatsapp />}
                    as="a"
                    href="https://wa.me/573116652702?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de"
                    target="_blank"
                    _hover={{
                        bg: 'brand.500',
                        color: 'white',
                        transform: 'translateY(-2px)',
                    }}
                    transition="all 0.3s ease"
                >
                    Consultar
                </Button>
            </VStack>
        </MotionBox>
    );
};

export default ServiceCard;