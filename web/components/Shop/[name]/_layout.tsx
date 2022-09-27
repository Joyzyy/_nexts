import {
    Box,
    Container,
    Flex,
    HStack,
    Image,
    IconButton,
    Text,
    Button,
    Divider,
    useColorModeValue,
    Center,
    Select,
  } from '@chakra-ui/react';
  import { FaGavel, FaCartPlus, FaHeart } from 'react-icons/fa';
  
  export { _productshoplayout };
  
  type Props = {};
  
  /*
            <Image
              alt={'photo'}
              w={{
                base: 'full',
                lg: '1/2',
              }}
              h={{
                base: 'auto',
                lg: '64',
              }}
              objectFit={'cover'}
              objectPosition={'center'}
              rounded={'2xl'}
              src={'https://dummyimage.com/400x400'}
            />
  */
  
  function _productshoplayout() {
    return (
      <Box overflow={'hidden'} mt={24} mx={{ base: 0, md: 12 }} mb={12}>
        <Container maxW={'8xl'}>
          <Flex
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            {' '}
            <Image
              alt={'photo'}
              w={{
                base: 'full',
                lg: '50%',
              }}
              h={{
                base: '64',
                lg: 'auto',
              }}
              objectFit={'cover'}
              objectPosition={'center'}
              rounded={'2xl'}
              src={'https://dummyimage.com/400x400'}
            />
            <Box
              mx={12}
              mt={{ base: '12', lg: '0' }}
              display={'flex'}
              flexDirection={'column'}
              pt={2}
              experimental_spaceY={4}
            >
              <Text as={'p'} fontSize={14}>
                BRAND NAME
              </Text>
              <Text as={'h1'} fontSize={24} fontWeight={'bold'}>
                Titlu
              </Text>
              <Text as={'p'} fontSize={18}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus repellendus
                provident, blanditiis vero consectetur, consequuntur accusamus tempora expedita
                maxime, laborum officia magnam sint ex laboriosam voluptates exercitationem ad nemo?
              </Text>
  
              <HStack justifyContent={'space-between'}>
                <HStack gap={{ base: 0, md: 4 }}>
                  <Text as={'h4'} fontWeight={'semibold'}>
                    Color
                  </Text>
                  <IconButton aria-label={'color-white'} rounded={'full'}>
                    <FaGavel />
                  </IconButton>
                  <IconButton aria-label={'color-white'} rounded={'full'}>
                    <FaGavel />
                  </IconButton>
                  <IconButton aria-label={'color-white'} rounded={'full'}>
                    <FaGavel />
                  </IconButton>
                </HStack>
                <Select placeholder='Size' maxW={120}>
                  <option value={'S'}>S</option>
                  <option value={'M'}>M</option>
                  <option value={'L'}>L</option>
                </Select>
              </HStack>
  
              <Divider />
  
              <HStack justifyContent={'space-between'} pt={{ base: 2, md: 8 }}>
                <Text as={'h1'} fontWeight={'black'} fontSize={24}>
                  $59.99
                </Text>
  
                <HStack gap={2}>
                  <Button rightIcon={<FaCartPlus />} colorScheme={'purple'}>
                    Add to cart
                  </Button>
                  <IconButton
                    rounded={'full'}
                    aria-label={'add to favorites'}
                    colorScheme={'blue'}
                    bgColor={useColorModeValue('blue.400', 'blue.500')}
                  >
                    <FaHeart />
                  </IconButton>
                </HStack>
              </HStack>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }
  