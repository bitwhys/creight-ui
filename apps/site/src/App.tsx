import {
  Box,
  Flex,
  HStack,
  Container,
  Heading,
  Stack,
  Text,
  chakra,
  Square,
  VStack,
  Button,
  Image,
} from '@chakra-ui/react'
import illustration from './assets/empty-cart.png'

export const App = () => (
  <Box as="section" h="full">
    <Container maxW="container.md" mt={32}>
      <Box shadow="xl" maxW="xl" rounded="md" p={8} borderWidth={1}>
        <Stack alignItems="center">
          <Image src={illustration} boxSize="315" />
          <VStack textAlign="center">
            <Heading>Your cart is empty</Heading>
            <Text fontSize="base">
              Looks like you haven’t added any products to your cart. Get back
              to explore our awesome products
            </Text>
          </VStack>
          <Button leftIcon={<span />} variant="solid">
            Back to shop
          </Button>
        </Stack>
      </Box>
    </Container>
  </Box>
)
