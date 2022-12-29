import { Button, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export const Modal = () => {

    const context = useContext(GlobalContext)
    const {isOpen, onOpen, onClose} = context

  return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {/* <Lorem count={2} /> */}
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}
