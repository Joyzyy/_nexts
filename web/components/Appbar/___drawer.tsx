import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  Button,
} from '@chakra-ui/react';
import type { MutableRefObject } from 'react';

export { ___drawer };

type Props = {
  btnRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

function ___drawer({ btnRef, isOpen, onClose }: Props) {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>
        <DrawerBody></DrawerBody>
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
