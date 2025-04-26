// src/components/Contact.jsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    useToast,
    InputGroup,
    InputLeftElement,
    Icon,
    Flex,
} from '@chakra-ui/react';
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaPaperPlane,
    FaWhatsapp,
    FaFacebook,
    FaInstagram
} from 'react-icons/fa';

const Contact = () => {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irían lógica de envío de formulario

        toast({
            title: "Mensaje enviado",
            description: "Nos pondremos en contacto contigo pronto.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
        });

        // Limpiar el formulario
        e.target.reset();
    };

    return (
        <Box id="contacto" py={20} bg="gray.50">
            <Container maxW="container.xl">
                <Flex direction="column" align="center" mb={12} data-aos="fade-up">
                    <Text
                        color="brand.500"
                        fontWeight="bold"
                        textTransform="uppercase"
                        mb={2}
                        letterSpacing="wide"
                    >
                        Contáctanos
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
                        ¿Cómo podemos ayudarte?
                    </Heading>
                    <Text
                        color="gray.600"
                        textAlign="center"
                        mt={8}
                        maxW="800px"
                        fontSize="lg"
                    >
                        Estamos a tu disposición para brindarte toda la información que necesites sobre nuestros servicios.
                        Completa el formulario y te contactaremos lo antes posible.
                    </Text>
                </Flex>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <VStack spacing={5} align="stretch" data-aos="fade-right">
                        <Heading as="h3" size="md">
                            Envíanos un mensaje
                        </Heading>

                        <Box as="form" onSubmit={handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Nombre Completo</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon as={FaUser} color="gray.300" />
                                        </InputLeftElement>
                                        <Input type="text" placeholder="Tu nombre" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="email" isRequired>
                                    <FormLabel>Correo Electrónico</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon as={FaEnvelope} color="gray.300" />
                                        </InputLeftElement>
                                        <Input type="email" placeholder="Tu correo" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="phone">
                                    <FormLabel>Teléfono</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon as={FaPhone} color="gray.300" />
                                        </InputLeftElement>
                                        <Input type="tel" placeholder="Tu teléfono" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="message" isRequired>
                                    <FormLabel>Mensaje</FormLabel>
                                    <Textarea
                                        placeholder="¿En qué podemos ayudarte?"
                                        rows={5}
                                    />
                                </FormControl>

                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    size="lg"
                                    width="full"
                                    rightIcon={<FaPaperPlane />}
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    Enviar Mensaje
                                </Button>
                            </VStack>
                        </Box>
                    </VStack>

                    <VStack align="stretch" spacing={8} data-aos="fade-left">
                        <Heading as="h3" size="md">
                            Contáctanos directamente
                        </Heading>

                        <Text fontSize="lg">
                            Si prefieres una atención más rápida, puedes contactarnos directamente a través de nuestros canales de comunicación:
                        </Text>

                        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
                            <Button
                                as="a"
                                href="https://wa.me/573116652702"
                                target="_blank"
                                leftIcon={<FaWhatsapp size="20px" />}
                                colorScheme="green"
                                // bg={'Whatsapp.500'}
                                variant="solid"
                                size="lg"
                                p={7}
                                justifyContent="flex-start"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                transition="all 0.3s ease"
                            >
                                WhatsApp
                            </Button>

                            <Button
                                as="a"
                                href="tel:3116652702"
                                leftIcon={<FaPhone size="20px" />}
                                colorScheme="blue"
                                variant="solid"
                                size="lg"
                                p={7}
                                justifyContent="flex-start"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                transition="all 0.3s ease"
                            >
                                Llamar
                            </Button>

                            <Button
                                as="a"
                                href="mailto:ayudarequipos@gmail.com"
                                leftIcon={<FaEnvelope size="20px" />}
                                colorScheme="red"
                                variant="solid"
                                size="lg"
                                p={7}
                                justifyContent="flex-start"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                transition="all 0.3s ease"
                            >
                                Email
                            </Button>

                            {/* <Button
                                as="a"
                                href="#"
                                leftIcon={<FaFacebook size="20px" />}
                                colorScheme="blue"
                                variant="solid"
                                size="lg"
                                p={7}
                                justifyContent="flex-start"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                transition="all 0.3s ease"
                            >
                                Facebook
                            </Button> */}
                        </SimpleGrid>

                        <Box
                            bg="white"
                            p={6}
                            borderRadius="lg"
                            boxShadow="md"
                            mt={6}
                        >
                            <Heading as="h4" size="sm" mb={3}>
                                Horario de Atención
                            </Heading>
                            <Text>
                                <strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM<br />
                                <strong>Sábados:</strong> 8:00 AM - 2:00 PM<br />
                                <strong>Domingos y Festivos:</strong> Servicio de emergencia
                            </Text>
                        </Box>
                    </VStack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Contact;