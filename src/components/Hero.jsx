// src/components/Hero.jsx
import React from 'react';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    createIcon,
    Flex,
    Badge,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaAmbulance, FaHeartbeat } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionStack = motion(Stack);

const Hero = () => {
    const heroTextWidth = useBreakpointValue({ base: '100%', md: '70%', lg: '60%' });

    return (
        <Box
            id="inicio"
            position="relative"
            height={{ base: '100vh', md: '90vh' }}
            backgroundImage="url('src/assets/hero-bg.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'linear-gradient(rgba(0, 0, 40, 0.7), rgba(0, 0, 40, 0.5))',
                zIndex: 1,
            }}
        >
            <Container
                maxW="container.xl"
                height="100%"
                position="relative"
                zIndex={2}
            >
                <Flex
                    height="100%"
                    direction="column"
                    justifyContent="center"
                    pt={{ base: '100px', md: '0' }}
                >
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge
                            colorScheme="blue"
                            fontSize="sm"
                            px={3}
                            py={1}
                            mb={4}
                            borderRadius="full"
                        >
                            Equipos Médicos a Domicilio
                        </Badge>
                    </MotionBox>

                    <MotionHeading
                        as="h1"
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                        fontWeight="bold"
                        color="white"
                        lineHeight="shorter"
                        width={heroTextWidth}
                        mb={6}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Soluciones médicas profesionales en la comodidad de tu hogar
                    </MotionHeading>

                    <MotionText
                        color="gray.100"
                        fontSize={{ base: 'md', lg: 'lg' }}
                        mb={8}
                        width={heroTextWidth}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Equipos médicos de alta calidad y servicios profesionales de enfermería a domicilio en Bogotá. Cuidamos de tu salud y bienestar con atención personalizada.
                    </MotionText>

                    <MotionStack
                        direction={{ base: 'column', sm: 'row' }}
                        spacing={4}
                        width={{ base: '100%', md: 'auto' }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            rounded="full"
                            px={6}
                            colorScheme="brand"
                            bg="brand.500"
                            _hover={{ bg: 'brand.600' }}
                            rightIcon={<Icon as={Arrow} w={5} h={5} />}
                            as={ScrollLink}
                            to="servicios"
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                        >
                            Nuestros Servicios
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            rounded="full"
                            px={6}
                            border="2px"
                            borderColor="white"
                            leftIcon={<FaHeartbeat />}
                            color="white"
                            _hover={{
                                bg: 'whiteAlpha.200',
                                transform: 'translateY(-2px)',
                            }}
                            as={ScrollLink}
                            to="contacto"
                            smooth={true}
                            offset={-80}
                            duration={500}
                            cursor="pointer"
                            bg={useColorModeValue('brand.500', 'brand.600')}
                        >
                            Contáctanos
                        </Button>
                    </MotionStack>

                    <Flex
                        mt={12}
                        width={{ base: '100%', md: '80%' }}
                        bg="whiteAlpha.200"
                        backdropFilter="blur(8px)"
                        borderRadius="xl"
                        p={4}
                        align="center"
                        as={motion.div}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Icon as={FaAmbulance} w={10} h={10} color="white" mr={4} />
                        <Box>
                            <Text fontWeight="bold" color="white">
                                Servicio de entrega rápido
                            </Text>
                            <Text color="gray.100" fontSize="sm">
                                Entregamos equipos médicos a domicilio en toda Bogotá en el menor tiempo posible
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
});

export default Hero;