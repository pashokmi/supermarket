import PropTypes from 'prop-types'
import Link from 'next/link'
import { palette } from 'src/theme/palette'
import Image from 'next/image'
import Button from 'src/ui/Button'
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import ContentLoader from 'react-content-loader'


const Card = ({ id, imageUrl, title, price, onAddToCart, isItemAdded = false, isLoading }) => {

  const obj = { id, parentId: id, title, imageUrl, price }
  const onClickPlus = () => {
    onAddToCart(obj)
  }

  return (
    <Box
      m={'5px'}
      as={'li'}
      sx={{
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
          ':hover': {
            transform: 'scale(1.0)'
          }
        }
      }}
    >
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        as={'article'}
        p={'20px'}
        sx={{
          '@media (max-width: 492px)': {
            padding: '5px'
          }
        }}
      >
        {isLoading ?
          <ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox='0 0 155 265'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'>
            <rect x='1' y='0' rx='10' ry='10' width='155' height='155' />
            <rect x='0' y='167' rx='5' ry='5' width='155' height='15' />
            <rect x='0' y='187' rx='5' ry='5' width='100' height='15' />
            <rect x='1' y='234' rx='5' ry='5' width='80' height='25' />
            <rect x='124' y='230' rx='10' ry='10' width='32' height='32' />
          </ContentLoader>
          :

          <>
            <Link href={`/items/${id}`}>
              <Flex flexDirection={'column'} as='a'>
                <Image
                  src={imageUrl}
                  alt={title}
                  width={150}
                  height={150}
                  objectFit='contain'
                />
                <Text fontSize={[1, 2]} my={'15px'} sx={{ textAlign: 'center' }}>
                  {title}
                </Text>
              </Flex>
            </Link>
            <Flex
              justifyContent={'space-around'}
              alignItems={'center'}
              width={'100%'}
              py={'5px'}
              mb={'10px'}
            >
              <Text fontSize={[3, 4]} fontWeight={500} color={palette.grayText}>
                {price} грн.
              </Text>
              <Button onClick={onClickPlus} sx={{ display: 'block' }}>
                {isItemAdded(id) ? (
                  <BsFillCartXFill size={30} color={palette.blue} />
                ) : (
                  <BsFillCartPlusFill size={30} color={palette.green} />
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
          </>
        }
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
