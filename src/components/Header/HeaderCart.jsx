import React, { useState } from 'react'
import Button from 'src/ui/Button'
import { GiShoppingCart } from 'react-icons/gi'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import Text from 'src/ui/Text'
import { FaRegTimesCircle } from 'react-icons/fa'
import Image from 'next/image'
import { palette } from 'src/theme/palette'

const HeaderCart = () => {
  const [openCart, setOpenCart] = useState(false)
  const cartHandler = () => {
    setOpenCart(!openCart)
  }

  return (
    <Box>
      <Button onClick={cartHandler}>
        <Flex alignItems={'center'}>
          <GiShoppingCart size={35} /> <Text fontSize={'18px'}>1205 грн.</Text> 
        </Flex>
      </Button>
      <Flex
        justifyContent={'flex-end'}
        sx={{
          position: 'fixed',
          backgroundColor: '#00000066',
          overflow: 'hidden',
          opacity: `${openCart ? '1' : '0'}`,
          top: '0',
          left: `${openCart ? '0px' : '2000px'}`,
          bottom: 0,
          right: 0,
          zIndex: 1000,
          transition: 'opacity 0.5s linear'
        }}
      >
        <Box bg={'white'} sx={{ width: '320px' }}>
          <Flex
            p={'10px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text fontSize={[3, 4, 5]}>Кошик</Text>
            <Flex onClick={cartHandler} sx={{ cursor: 'pointer' }}>
              <FaRegTimesCircle size={25} />
            </Flex>
          </Flex>

          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'80vh'}
          >
            <Flex
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={'/static/cart.png'}
                alt={'Кошик пустий'}
                width={150}
                height={150}
                objectFit="contain"
              />
              <Text fontSize={[3, 4]} mb={[1, 2]}>
                Кошик пустий
              </Text>
              <Text
                fontSize={[1, 2]}
                color={palette.black}
                sx={{ opacity: '0.4' }}
              >
                Добавте товар, щоб зробити замовлення.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeaderCart
