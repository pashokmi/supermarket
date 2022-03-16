import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { palette } from 'src/theme/palette'
import Image from 'next/image'
import Button from 'src/ui/Button'
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'

const Card = ({ id, imageUrl, title, price, onAddToCard, added = false }) => {
  const [isAdded, setIsAdded] = useState(added)

  const obj = { id, parentId: id, title, imageUrl, price }
  const onClickPlus = () => {
    onAddToCard(obj)
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
        borderRadius: '30px',
        boxShadow: '0px 14px 30px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
        transition: 'all 0.3s linear',
        ':hover': {
          transform: 'scale(1.04)'
        },
        '@media (max-width: 492px)': {
          maxWidth: '145px'
        }
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
        <Text fontSize={[1, 2]} my={'15px'} xs={{ textAlign: 'center' }}>
          {title}
        </Text>
        <Flex
          justifyContent={'space-around'}
          alignItems={'center'}
          width={'100%'}
          mb={'10px'}
        >
          <Text fontSize={[2, 3]} fontWeight={500} color={palette.grayText}>
            {price} грн.
          </Text>
          <Button onClick={onClickPlus} sx={{ display: 'block' }}>
            {isAdded ? (
              <BsFillCartXFill size={25} color={palette.blue} />
            ) : (
              <BsFillCartPlusFill size={25} color={palette.green} />
            )}
          </Button>
        </Flex>
        <Button
          bg={palette.green}
          color={palette.white}
          p={'10px 15px'}
          sx={{
            borderRadius: '30px',
            width: '100%',
            opacity: '1',
            ':hover': {
              opacity: '0.8'
            }
          }}
        >
          Замовити в 1 клік
        </Button>
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
