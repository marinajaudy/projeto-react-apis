import {Flex, 
    Heading, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent,
    ModalOverlay,
    // Modal,
    Text} from '@chakra-ui/react'
import Modal from 'react-modal'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ModalContainer } from './ModalConfirm.styles'

export const ModalConfirm = () => {

    const context = useContext(GlobalContext)
    const {isOpen, setIsOpen, isOpenDel, setIsOpenDel} = context

    function openModalAdd(){
      setIsOpen(true)
    }

    function openModalDel(){
      setIsOpenDel(true)
    }

    function closeModal(){
      setIsOpen(false)
      setIsOpenDel(false)
    }

    const customStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '12px',
        width:'450px',
        height:'220px',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }
    }

  return (
          <>
            <ModalContainer>
              <Modal
              isOpen={isOpen || isOpenDel}
              onRequestClose={closeModal}
              style={customStyle}
              
              >
                <Flex
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
                      <Heading fontSize='48px' fontWeight='700'> Gotcha!</Heading>
                      <Text fontSize='16px' fontWeight='700'>O Pokemón foi adicionado a sua Pokedex!</Text>
                      </>
                    }
                    <button onClick={closeModal}>Close</button>
                </Flex>
                
              </Modal>
            </ModalContainer>
          </>
        )
}





{/* <Modal isOpen={isOpen || isOpenDel} onClose={() => {
              setIsOpen(false)
              setIsOpenDel(false)
            }}
            isCentered
            closeOnEsc
            width='100%'
            height='100%'
            alignItems='center'

            >
              <ModalOverlay 
              // minWidth='100%' 
              border='2px solid red'
              />
              <ModalContent
              border='2px solid yellow'
              >
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
            </Modal> */}