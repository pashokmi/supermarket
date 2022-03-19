import React, { useState } from 'react'
import { palette } from 'src/theme/palette'
import Header from 'src/components/Header/Header'
import Image from 'next/image'
import Button from 'src/ui/Button'
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs'
import Box from 'src/ui/Box'
import Container from 'src/ui/Container'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'

const DynamicCard = () => {
  const [isAdded, setIsAdded] = useState(false)

  //   const obj = { id, parentId: id, title, imageUrl, price }
  const onClickPlus = () => {
    // onAddToCard(obj)
    setIsAdded(!isAdded)
  }
  return (
    <Container>
      <Box bg={'white'} p={20} borderRadius={'20px'} mt={10}>
        <Box
          m={'5px'}
          sx={{
            width: '100%',
            borderRadius: '30px',
            '@media (max-width: 492px)': {}
          }}
        >
          <Header />
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            as={'article'}
            p={'20px'}
          >
            <Image
              src={'/static/CardItems/1.jpg'}
              alt={'title'}
              width={350}
              height={350}
              objectFit='contain'
            />
            <Text fontSize={[1, 2]} my={'15px'} xs={{ textAlign: 'center' }}>
              {'Weber Master-Touch GBS Premium E-5770'}
            </Text>
            <Flex
              justifyContent={'space-around'}
              alignItems={'center'}
              width={'100%'}
              mb={'10px'}
            >
              <Text fontSize={[2, 3]} fontWeight={500} color={palette.grayText}>
                {'6895'} грн.
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
      </Box>
    </Container>
  )
}

export default DynamicCard
