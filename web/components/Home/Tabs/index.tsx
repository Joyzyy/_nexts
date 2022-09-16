import { useContext } from 'react';
import { ProductContext } from '@/lib/product';

import { Box } from '@chakra-ui/react';

import { _layout } from './_layout';
import { _component } from './_component';

export { _tabs };

const _tabs: React.FC = () => {
  const data = useContext(ProductContext);
  const names = new Array('test', 'test23', 'FEATURED');

  return (
    <Box mt={12}>
      <_component
        name={names}
        children={names.map((name, index) => (
          <_layout
            key={index}
            tabsContent={data
              ?.filter((item) => item.tabtype === name)
              .map((product) => ({
                ...product,
              }))}
          />
        ))}
      />
    </Box>
  );
};
