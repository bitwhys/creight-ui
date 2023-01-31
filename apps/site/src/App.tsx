import {
  Box,
  Flex,
  HStack,
  Container,
  Heading,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react'

export const App = () => (
  <Box as="section" h="full" bg="black" py={{ base: '16', md: '24' }}>
    <Container maxW="container.xl" mt={32}>
      <Stack spacing={20}>
        <Stack>
          <Text
            color="gray.400"
            textTransform="uppercase"
            fontSize={{ base: 'lg', md: '2xl' }}
            maxW="3xl"
            fontWeight="semibold"
          >
            creight studio
          </Text>
          <Heading size={{ base: 'md', md: '4xl' }} color="white" maxW="md">
            We Make Stuff Happen
          </Heading>
        </Stack>
        <Box h="md" w="full" rounded="lg" bg="lime.500" />
        <Flex justifyContent="space-between" alignItems="center">
          <HStack>
            <chakra.svg
              color="gray.400"
              h="10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z"
                fill="currentColor"
              />
            </chakra.svg>
            <chakra.svg
              h="10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
                fill="white"
              />
            </chakra.svg>
          </HStack>
          <HStack spacing={12}>
            <Box>
              <svg
                width="90"
                height="74"
                viewBox="0 0 90 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M90 68.867C81.2315 74.5733 65.2943 71.1058 58.0529 62.1277C50.2633 52.467 49.0036 33.3141 64.3427 22.6887C60.9304 16.4636 57.5137 10.2294 54.0969 3.99527C59.0046 0.723467 69.8801 0.450438 77.0535 7.99969C79.8358 10.9302 81.6212 14.3704 82.3508 18.3475C83.094 22.3701 82.6091 26.2608 80.9959 30.0149C79.3963 33.7327 76.8179 36.6268 73.4917 38.9476C79.0111 48.9541 84.4897 58.8832 90 68.867Z"
                    fill="white"
                  />
                  <path
                    d="M28.9019 55.7252C28.8521 60.121 28.34 64.3575 26.0018 68.1025C23.2466 72.5074 19.0142 74.0546 14.0295 73.9954C5.90911 73.8998 1.68575 68.7669 0.503034 61.3633C0.149578 59.1517 0.0453532 56.881 0.0362902 54.6376C-0.0135562 43.9804 3.82758e-05 33.3186 0.0181643 22.6568C0.0272272 19.0028 0.362558 15.3897 1.8217 11.9723C3.93337 7.0259 7.74436 4.50038 13.0054 4.11814C16.1911 3.88606 19.268 4.32291 22.0594 6.02479C25.3311 8.0179 27.1074 11.1077 27.9684 14.7071C28.485 16.8777 28.5892 19.1484 28.8883 21.3736C28.9835 22.0698 28.7841 22.4338 28.0364 22.6568C25.2903 23.4759 22.5714 24.386 19.6984 25.3052C19.6984 23.6124 19.7302 22.0425 19.6894 20.4771C19.635 18.3384 19.5716 16.1951 18.5837 14.2157C17.7091 12.4592 16.259 11.5991 14.3422 11.6128C12.4707 11.6264 10.9527 12.4364 10.2367 14.2111C9.72462 15.4761 9.40289 16.8549 9.23522 18.211C9.05396 19.6945 9.12647 21.2098 9.12647 22.7114C9.12193 34.2742 9.09021 45.837 9.15819 57.3952C9.17178 59.3201 9.41648 61.2995 9.92854 63.1516C10.5494 65.3904 12.1943 66.4234 14.3467 66.4416C16.4947 66.4643 18.0263 65.4223 18.842 63.2244C19.1773 62.3234 19.422 61.3451 19.49 60.3895C19.6305 58.3326 19.635 56.2667 19.6894 54.2053C19.703 53.7594 19.6894 53.3134 19.6894 52.7765C20.1561 52.913 20.5141 53.0086 20.863 53.1223C23.523 53.9824 26.1785 54.847 28.8883 55.7252H28.9019Z"
                    fill="white"
                  />
                  <path
                    d="M47.3043 8.41382C47.2998 12.6048 45.3829 15.6263 42.0523 16.6957C36.184 18.5751 30.9683 14.0792 31.6752 7.74035C32.1238 3.72227 34.0497 1.08299 37.2987 0.304856C43.1852 -1.10579 47.4674 2.51184 47.3088 8.41382H47.3043ZM42.9541 8.7005C42.8181 7.89962 42.7683 7.21704 42.5779 6.57998C42.1384 5.11927 41.0236 4.26378 39.637 4.23193C38.2186 4.20007 37.0812 4.96455 36.5284 6.37065C35.9438 7.86776 35.9393 9.37852 36.5601 10.8665C37.0903 12.1316 38.0963 12.8141 39.4331 12.8551C40.7925 12.8961 41.8257 12.2226 42.3559 10.9712C42.6731 10.2295 42.7773 9.39673 42.9541 8.7005Z"
                    fill="#B0FF06"
                  />
                </g>
              </svg>
            </Box>
            <Text maxW="md" fontSize="xl" color="gray.400" fontWeight="normal">
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </Text>
          </HStack>
        </Flex>
      </Stack>
    </Container>
  </Box>
)
