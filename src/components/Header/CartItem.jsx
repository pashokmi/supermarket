import React from 'react'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import Text from 'src/ui/Text'
import Image from 'next/image'
import { BsFillCartXFill } from 'react-icons/bs'
import { palette } from 'src/theme/palette'

const CartItem = ({ item, onRemoveItem }) => {
  const { id, imageUrl, title, price } = item
  return (
    <Box mb={'10px'}>
      <Flex
        p={'10px'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          width: '300px',
          border: `1px solid ${palette.gray}`,
          borderRadius: '30px'
        }}
      >
        <Image
          src={imageUrl}
          alt={'title'}
          width={100}
          height={110}
          objectFit="contain"
        />
        <Text fontSize={1} p={'5px 5px 5px 10px'}>
          {title}
        </Text>
        <Text
          fontSize={1}
          p={'5px'}
          fontWeight={500}
          color={palette.dark}
          sx={{ textAlign: 'center' }}
        >
          {price} грн.
        </Text>
        <Button
          onClick={() => onRemoveItem(id)}
          sx={{ display: 'block' }}
          p={'5px'}
        >
          <BsFillCartXFill size={25} color={palette.blue} />
        </Button>
      </Flex>
    </Box>
  )
}

CartItem.propTypes = {}

export default CartItem
