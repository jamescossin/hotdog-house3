import { Box, Heading, Text, Image, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const Visit = () => {
  return (
    <Box bg="white" color="red.600" minH="100vh" p={8}>
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="center">
        <Heading as="h1" size="2xl">
          Visit Hot Dog House
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/restaurant-exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
        />
        <Text fontSize="lg">
          We are a family-owned restaurant serving homemade soups, specials, and our famous Hot Dog Sauce. Whether you're
          craving a hearty breakfast, a delicious lunch, or a satisfying dinner, we have something for everyone!
        </Text>

        <VStack spacing={6} align="stretch" w="100%">
          <HStack spacing={4}>
            <Icon as={FaMapMarkerAlt} boxSize={6} />
            <Box textAlign="left">
              <Heading as="h3" size="md">
                Location
              </Heading>
              <Text>123 Main Street, YourTown, USA</Text>
              <Link href="https://www.google.com/maps" color="red.500" isExternal>
                Get Directions
              </Link>
            </Box>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaClock} boxSize={6} />
            <Box textAlign="left">
              <Heading as="h3" size="md">
                Hours
              </Heading>
              <Text>Monday - Friday: 5:00 AM - 9:00 PM</Text>
              <Text>Saturday - Sunday: 6:00 AM - 10:00 PM</Text>
            </Box>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaPhone} boxSize={6} />
            <Box textAlign="left">
              <Heading as="h3" size="md">
                Contact
              </Heading>
              <Text>(555) 123-4567</Text>
            </Box>
          </HStack>
        </VStack>

        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/delicious-hotdog"
          alt="Delicious Hot Dog"
          borderRadius="md"
        />

        <Text fontSize="lg">
          Stop by and give us a try! We can't wait to serve you our famous Texas hot dogs, cheesesteaks, and homemade
          specials.
        </Text>
      </VStack>
    </Box>
  );
};

export default Visit;