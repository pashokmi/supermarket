import React, { useState } from 'react'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import Text from 'src/ui/Text'
import { FaRegTimesCircle } from 'react-icons/fa'
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartItem from './CartItem'
import { EmptyCart } from './EmptyCart'
import { CgArrowRight } from 'react-icons/cg'
import { palette } from 'src/theme/palette'

const HeaderCart = ({ cartItems = [], onRemoveItem }) => {
  const [openCart, setOpenCart] = useState(false)
  const cartHandler = () => {
    setOpenCart(!openCart)
  }

  const totalPrice = cartItems.reduce((sum, obj) => +obj.price + sum, 0)
  return (
    <Box>
      <Button onClick={cartHandler}>
        <Flex alignItems={'center'}>
          <HiOutlineShoppingCart size={35} color={palette.blue}/>
          <Text fontSize={3} color={palette.blue}>{totalPrice} грн.</Text>
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
            <Text fontSize={[3, 4, 5]}>
              Кошик
            </Text>
            <Flex onClick={cartHandler} sx={{ cursor: 'pointer' }}>
              <FaRegTimesCircle size={25} />
            </Flex>
          </Flex>

          <Flex
            flexDirection={'column'}
            justifyContent={cartItems.length ? 'flex-start' : 'center'}
            alignItems={'center'}
            height={'80vh'}
          >
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              overflowY={'scroll'}
            >
              {cartItems.length === 0 ? (
                <EmptyCart />
              ) : (
                <>
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onRemoveItem={onRemoveItem} />
                  ))}
                </>
              )}
            </Flex>
          </Flex>
          <Flex justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}>
            {cartItems.length > 0 && (
              <>
                <Flex alignItems={'center'} py={'5px'} mb={'10px'}>
                  <Text fontSize={[2,3]}>Замовлення на сумму:</Text>
                  <Text
                    px={'5px'}
                    fontSize={[3,4]}
                    color={palette.blue}>{totalPrice}.грн</Text>
                </Flex>
                <Button
                  p={15}
                  sx={{
                    border: `1px solid ${palette.gray}`,
                    borderRadius: '30px',
                    color: `${palette.white}`,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '18px'
                  }}
                  bg={palette.green}
                >
                  Оформити замовлення <CgArrowRight size={25} />{' '}
                </Button>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeaderCart
