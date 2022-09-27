import { Box, Center, Container, Flex, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Card } from '../Card';

export { _layout };

function _layout() {
  return (
    <Box
      backgroundColor={useColorModeValue('gray.200', 'gray.800')}
      textColor={useColorModeValue('gray.600', 'gray.200')}
    >
      <Container maxWidth={'8xl'} px={5} py={24} mx={'auto'}>
        <Center>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={6}
          >
            <Card
              tabtype='new'
              category='something'
              image='noimg'
              sizes={Array(1, 2, 3, 4)}
              name='asd'
              price={100}
            />
            <Card
              tabtype='new'
              category='something'
              image='noimg'
              sizes={Array(1, 2, 3, 4)}
              name='asd'
              price={100}
            />
            <Card
              tabtype='new'
              category='something'
              image='noimg'
              sizes={Array(1, 2, 3, 4)}
              name='asd'
              price={100}
            />
            <Card
              tabtype='new'
              category='something'
              image='noimg'
              sizes={Array(1, 2, 3, 4)}
              name='asd'
              price={100}
            />
          </Grid>
        </Center>
      </Container>
    </Box>
  );
}
