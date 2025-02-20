import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" color="red.600">
      {/* Hero Section */}
      <Box bg="red.600" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Hot Dog House
          </Heading>
          <Text fontSize="xl" mb={6}>
            Family-owned and serving delicious homemade meals since day one.
          </Text>
          <Button as={Link} to="/menu" colorScheme="whiteAlpha" size="lg">
            View Menu
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/hotdog-house3/restaurant-interior"
            alt="Restaurant Interior"
            borderRadius="md"
            boxShadow="lg"
          />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">
              We are a family-owned restaurant offering homemade soups, specials, and our famous hot dog sauce.
              Whether you're here for breakfast, lunch, or dinner, we have something delicious for you.
            </Text>
            <Button as={Link} to="/about" colorScheme="red">
              Learn More
            </Button>
          </VStack>
        </Stack>
      </Container>

      {/* Menu Preview */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Our Menu
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hotdog-house3/breakfast"
                alt="Breakfast"
                borderRadius="md"
                boxShadow="lg"
              />
              <Text fontSize="lg">Breakfast</Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hotdog-house3/hot-dogs"
                alt="Hot Dogs"
                borderRadius="md"
                boxShadow="lg"
              />
              <Text fontSize="lg">Famous Texas Hot Dogs</Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hotdog-house3/dinner"
                alt="Dinner"
                borderRadius="md"
                boxShadow="lg"
              />
              <Text fontSize="lg">Dinner Specials</Text>
            </VStack>
          </Stack>
          <Box textAlign="center" mt={8}>
            <Button as={Link} to="/menu" colorScheme="red">
              View Full Menu
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.lg" py={16} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Visit Us
        </Heading>
        <Text fontSize="lg" mb={6}>
          Stop by and give us a try! We’re open from 5:00 AM serving breakfast, lunch, and dinner.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/restaurant-exterior"
          alt="Restaurant Exterior"
          borderRadius="md"
          boxShadow="lg"
          mb={6}
        />
        <Button as={Link} to="/contact" colorScheme="red">
          Get Directions
        </Button>
      </Container>
    </Box>
  );
};

export default Home;