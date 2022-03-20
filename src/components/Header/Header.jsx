import React from 'react'
import Box from 'src/ui/Box'
import { links } from 'src/components/Constats'
import Link from 'next/link'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import HeaderCart from './HeaderCart'
import { palette } from 'src/theme/palette'
import { DiLinux } from 'react-icons/di'

const Header = ({ cartItems, onRemoveItem }) => {
  return (
    <Flex
      bg={palette.white}
      as={'nav'}
      justifyContent={'space-between'}
      alignItems={'center'}
      pb={20}
      mb={10}
      sx={{ borderBottom: `1px solid ${palette.gray}` }}
    >
      <Link href={'/'}>
        <Flex as={'a'} alignItems={'center'}>
          <DiLinux size={40} />
          <Text fontSize={3}>Mangal-Market</Text>
        </Flex>
      </Link>

      <Flex as={'ul'}>
        {links.map((link) => (
          <Box as={'li'} key={link.text} mr={10}>
            <Link href={link.url} scroll={false}>
              <a>{link.text}</a>
            </Link>
          </Box>
        ))}
      </Flex>
      <HeaderCart cartItems={cartItems} onRemoveItem={onRemoveItem} />
    </Flex>
  )
}

export default Header
