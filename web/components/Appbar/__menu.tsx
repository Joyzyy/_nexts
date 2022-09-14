import Link from 'next/link';
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AppbarConstants } from '@/constants/Appbar';
import { useAuth } from '@/hooks/useAuth';

export { __menu };

function ___isLoggedInLinks({ isLoggedIn }: { isLoggedIn: boolean | undefined }) {
  const { _LinksLoggedIn, _LinksGuest } = AppbarConstants;
  if (isLoggedIn) {
    return (
      <>
        {_LinksLoggedIn.map((props, index) => (
          <Link href={props.href} key={index}>
            <MenuItem icon={props.icon}>{props.text}</MenuItem>
          </Link>
        ))}
      </>
    );
  } else {
    return (
      <>
        {_LinksGuest.map((props, index) => (
          <Link href={props.href} key={index}>
            <MenuItem icon={props.icon}>{props.text}</MenuItem>
          </Link>
        ))}
      </>
    );
  }
}

function __menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { loggedIn } = useAuth();

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} />
      </MenuButton>

      <MenuList>
        <MenuItem isDisabled>{'guest'}</MenuItem>
        <___isLoggedInLinks isLoggedIn={loggedIn} />
        <MenuDivider />

        <Flex justifyContent={'space-around'} alignItems={'center'} mx={2}>
          <Text as={'h1'}>
            Toggle {colorMode === 'light' ? <span>dark</span> : <span>light</span>} mode
          </Text>
          <Button onClick={toggleColorMode} rounded={'xl'} size={'sm'}>
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </MenuList>
    </Menu>
  );
}
