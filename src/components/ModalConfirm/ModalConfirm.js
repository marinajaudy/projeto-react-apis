import {Flex, 
    Heading, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent,
    ModalOverlay,
    Modal,
    Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export const ModalConfirm = () => {

    const context = useContext(GlobalContext)
    const {isOpen, setIsOpen, isOpenDel, setIsOpenDel} = context

  return (
          <>
            <Modal isOpen={isOpen || isOpenDel} onClose={() => {
              setIsOpen(false)
              setIsOpenDel(false)
            }}
            isCentered
            closeOnEsc>
              <ModalOverlay maxWidth='full'/>
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Flex
                  width='450px'
                  height='220px'
                  justifyContent='center'  
                  alignItems='center'
                  flexDirection='column'     
                  >
                    {
                      isOpenDel? 
                      <>
                      <Heading fontSize='48px' fontWeight='700'> Oh No!</Heading>
                      <Text fontSize='16px' fontWeight='700' >O Pokemón foi removido da sua Pokedex!</Text>
                      </> :
                      <>
                      <Heading> Gotcha!</Heading>
                      <Text>O Pokemón foi adicionado a sua Pokedex!</Text>
                      </>
                    }
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )
}
