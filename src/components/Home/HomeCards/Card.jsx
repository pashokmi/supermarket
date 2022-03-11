import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { palette } from 'src/theme/palette'
import Image from 'next/image'
import Button from 'src/ui/Button'
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'

const Card = ({ id, imageUrl, title, price }) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

  return (
    <Box
      m={'5px'}
      as={'li'}
      sx={{
        maxWidth: '210px',
        width: '100%',
        border: `1px solid ${palette.gray}`,
        borderRadius: '30px'
      }}
    >
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        as={'article'}
        p={'20px'}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={150}
          objectFit="contain"
        />
        <Text fontSize={2} mb={'10px'}>
          {title}
        </Text>
        <Flex
          justifyContent={'space-around'}
          alignItems={'center'}
          width={'100%'}
        >
          <Text fontSize={3} fontWeight={500} color={palette.grayText}>
            {price} грн.
          </Text>
          <Button onClick={onClickPlus} sx={{ display: 'block' }}>
            {isAdded ? (
              <BsFillCartXFill size={25} color={palette.red} />
            ) : (
              <BsFillCartPlusFill size={25} color={palette.green} />
            )}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  isAdded: PropTypes.bool
}

export default Card
