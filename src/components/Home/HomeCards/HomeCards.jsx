import React from 'react'
import { palette } from 'src/theme/palette'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import Card from './Card'
import Grid from 'src/ui/Grid'

const SearchInput = styled.input`
  padding: 15px 15px 15px 45px;
  border-radius: 20px;
  border: 1px solid ${palette.gray};
  position: relative;
  font-size: 16px;
  min-width: 200px;

  ::placeholder {
    color: ${palette.grayText};
    font-size: 16px;
  }

  :target {
    color: ${palette.grayText};
  }
`
const HomeCards = ({ items, onAddToCart, isItemAdded }) => {
  return (
    <Box pt={10}>
      {/* Заголовок та інпут  26/44 */}
      <Flex
        px={15}
        mb={20}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          '@media (max-width: 492px)': {
            flexDirection: 'column'
          }
        }}
      >
        <Text
          fontSize={[3, 4, 5]}
          fontWeight={500}
          sx={{
            display: 'block',
            '@media (max-width: 992px)': {
              marginBottom: '10px'
            }
          }}
        >
          Всі товари
        </Text>
        <Flex alignItems={'center'} as='label' sx={{ position: 'relative' }}>
          <SearchInput type={'text'} placeholder='Пошук...' />
          <Box
            sx={{
              position: 'absolute',
              top: '12px',
              left: '15px',
              height: '22px',
              width: '22px'
            }}
          >
            <BsSearch size={22} color={'c4c4c4'} />
          </Box>
        </Flex>
      </Flex>

      <Grid as={'ul'} justifyContent={'center'} sx={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '10px',
        '@media (max-width: 492px)': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '5px'
        }
      }}>
        {
          items.map((item) => (
            <Card
              onAddToCart={onAddToCart}
              isItemAdded={isItemAdded}
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          ))
        }
      </Grid>
    </Box>
  )
}

export default HomeCards
