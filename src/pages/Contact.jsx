import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, HStack, Icon, Link, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading color="red.600">Contact Hot Dog House</Heading>
          <Text fontSize="lg" color="gray.600">
            We’d love to hear from you! Reach out to us for any inquiries or feedback.
          </Text>
        </Box>

        <Box>
          <Image
            src="http://stock.calucid.com/fetch/calucid/hotdog-house3/restaurant-exterior"
            alt="Hot Dog House Exterior"
            borderRadius="md"
            mb={4}
          />
        </Box>

        <Box bg="red.50" p={6} borderRadius="md">
          <Heading size="md" color="red.600" mb={4}>
            Our Location
          </Heading>
          <HStack spacing={3}>
            <Icon as={FaMapMarkerAlt} color="red.600" />
            <Text>123 Main Street, YourTown, USA</Text>
          </HStack>
        </Box>

        <Box bg="red.50" p={6} borderRadius="md">
          <Heading size="md" color="red.600" mb={4}>
            Contact Information
          </Heading>
          <HStack spacing={3} mb={2}>
            <Icon as={FaEnvelope} color="red.600" />
            <Text>contact@hotdoghouse.com</Text>
          </HStack>
          <HStack spacing={4}>
            <Link href="https://facebook.com/hotdoghouse" isExternal>
              <Icon as={FaFacebook} boxSize={6} color="red.600" />
            </Link>
            <Link href="https://instagram.com/hotdoghouse" isExternal>
              <Icon as={FaInstagram} boxSize={6} color="red.600" />
            </Link>
            <Link href="https://twitter.com/hotdoghouse" isExternal>
              <Icon as={FaTwitter} boxSize={6} color="red.600" />
            </Link>
          </HStack>
        </Box>

        <Box bg="red.50" p={6} borderRadius="md">
          <Heading size="md" color="red.600" mb={4}>
            Contact Form
          </Heading>
          <form>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button colorScheme="red" type="submit">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;