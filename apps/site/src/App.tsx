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
      <Box shadow="xl" maxW="xl" rounded="md" p={8}>
        <Stack alignItems="center">
          <Image src={illustration} boxSize="315" />
          <Stack spacing={8}><VStack spacing={3} textAlign="center">
            <Heading>Your cart is empty</Heading>
            <Text fontSize="base">
              Looks like you haven’t added any products to your cart. Get back
              to explore our awesome products
            </Text>
          </VStack>
            <Button leftIcon={<span/>} variant="primary">
              Back to shop
            </Button></Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
