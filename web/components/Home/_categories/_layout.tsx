import { Container, Flex } from '@chakra-ui/react';
import { _component } from './_component';

export { _layout };

function _layout() {
  return (
    <Container
      maxWidth={{
        base: '4xl',
        xl: '8xl',
      }}
    >
      <Flex
        justifyContent={{
          base: 'center',
          xl: 'space-between',
        }}
        display={{
          base: 'flex-col',
          xl: 'flex',
        }}
        experimental_spaceY={{
          base: 4,
          xl: 0,
        }}
        gap={{
          base: 0,
          xl: 18,
        }}
      >
        <_component
          category={'Category 1'}
          title={'Title 1'}
          description={'Description 1'}
          learnMore={'/learn-more'}
        />

        <_component
          category={'Category 2'}
          title={'Title 2'}
          description={'Description 2'}
          learnMore={'/learn-more'}
        />
        <_component
          category={'Category 3'}
          title={'Title 3'}
          description={'Description 3'}
          learnMore={'/learn-more'}
        />
      </Flex>
    </Container>
  );
}
