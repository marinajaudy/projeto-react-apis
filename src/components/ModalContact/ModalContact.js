import { Flex, Image } from '@chakra-ui/react'
import Modal from 'react-modal'
import React, { useContext } from 'react'
import github from '../../assets/logogithub-removebg-preview.png'
import linkedin from '../../assets/LogoLinkedin.png'
import { GlobalContext } from '../../contexts/GlobalContext'

export const ModalContact = () => {

  const context = useContext(GlobalContext)
    const {isOpenContact, setIsOpenContact} = context

  function closeModalContact() {
    setIsOpenContact(false)
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
      width: '450px',
      height: '220px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
      zIndex: '1000'
    }
  }

  return (
    <>
      <Modal isOpen={isOpenContact} onRequestClose={closeModalContact} style={customStyle}>
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          onClick={closeModalContact}
        >
          {
            isOpenContact ?
              <>
                <a href='https://github.com/marinajaudy'><Image src={github} alt='Github'/></a>
                <a href='https://www.linkedin.com/in/marina-jaudy/'><Image src={linkedin} alt='Linkedin'/></a>
              </>:
              <></>
          }
        </Flex>
      </Modal>
    </>
  )
}