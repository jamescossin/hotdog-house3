import { Box, Heading, Text, Image, VStack, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" color="red.600">
          About Hot Dog House
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/restaurant-exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          We are a family-owned restaurant dedicated to serving delicious,
          homemade meals. From our famous hot dog sauce to our freshly prepared
          soups and daily specials, we take pride in offering quality food with
          a warm, welcoming atmosphere.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/breakfast-platter"
          alt="Breakfast Platter"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Start your day with a hearty breakfast! We serve eggs, bacon,
          sausage, home fries, hashbrowns, French toast, pancakes, and more,
          beginning at 5:00 AM.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/texas-hot-dogs"
          alt="Texas Hot Dogs"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Our lunch menu features our famous Texas hot dogs, juicy hamburgers,
          cheesesteaks, chef salads, crispy fries, onion rings, mozzarella
          sticks, and more.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/dinner-plate"
          alt="Dinner Plate"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Enjoy a full dinner with options like chicken, liver & onions, ham,
          fish, and shrimp. There's something for everyone at Hot Dog House!
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house3/family-dining"
          alt="Family Dining"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Whether you're stopping by for a quick bite or a full meal, we invite
          you to experience the friendly service and homemade flavors that make
          Hot Dog House special. Stop in and give us a try!
        </Text>
      </VStack>
    </Container>
  );
};

export default About;