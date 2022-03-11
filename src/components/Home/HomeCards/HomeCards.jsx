import React, { useEffect, useState } from 'react'
import { palette } from 'src/theme/palette'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import Card from './Card'

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
const HomeCards = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('https://610688cc1f3487001743796f.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
  }, [])

  return (
    <Box pt={10}>
      {/* Заголовок та інпут  26/44 */}
      <Flex
        mb={20}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          '@media (max-width: 992px)': {
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
              marginBottom:'10px'
            }
          }}
        >
          Всі товари
        </Text>
        <Flex alignItems={'center'} as="label" sx={{ position: 'relative' }}>
          <SearchInput type={'text'} placeholder="Пошук..." />
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

      <Flex as={'ul'} flexWrap={'wrap'} justifyContent={'center'}>
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default HomeCards
